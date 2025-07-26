const express = require('express');
const axios = require('axios');
const { URL } = require('url');

const newsRouter = express.Router();

const api = axios.create({
  baseURL: process.env.WP_API_BASE || 'https://raddy.dev/wp-json/wp/v2',
  timeout: 5000,
  headers: { 'User-Agent': 'news-site-dev' }
});

function pickThumbnail(p) {
  if (p.jetpack_featured_media_url) return p.jetpack_featured_media_url;

  const fm = p._embedded?.['wp:featuredmedia']?.[0];
  if (fm && fm.media_type === 'image') {
    const sizes = fm.media_details?.sizes || {};
    const fromSizes =
      sizes.medium_large?.source_url ||
      sizes.large?.source_url ||
      sizes.medium?.source_url ||
      sizes.thumbnail?.source_url;
    if (fromSizes) return fromSizes;
    if (fm.source_url) return fm.source_url;
  }

  const yoast = p.yoast_head_json;
  const og = yoast?.og_image?.[0]?.url;
  if (og) return og;
  if (yoast?.twitter_image) return yoast.twitter_image;

  const html = p.content?.rendered || '';
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (m?.[1]) return m[1];

  return null;
}

newsRouter.get('/img', async (req, res) => {
  try {
    const src = req.query.src;
    if (!src) return res.sendStatus(400);

    const u = new URL(src);
    const allow = ['raddy.dev', 'i0.wp.com', 'secure.gravatar.com'];
    if (!['http:', 'https:'].includes(u.protocol) || !allow.includes(u.hostname)) {
      return res.sendStatus(403);
    }

    const r = await axios.get(src, {
      responseType: 'stream',
      timeout: 8000,
      headers: { 'User-Agent': 'news-site-dev', Referer: '' }
    });
    res.set('Content-Type', r.headers['content-type'] || 'image/jpeg');
    r.data.pipe(res);
  } catch {
    res.redirect('/image/placeholder.jpg');
  }
});

newsRouter.get('/', async (req, res, next) => {
  try {
    const { data } = await api.get('/posts', {
      params: {
        per_page: 10,
        _embed: 1,
        _fields: 'id,date,title,link,excerpt,content,yoast_head_json,_embedded,jetpack_featured_media_url'
      }
    });

    const articles = data.map(p => {
      let url = pickThumbnail(p);
      if (url && url.startsWith('http://')) url = url.replace(/^http:\/\//, 'https://');
      return { ...p, thumbnail_url: url };
    });

    articles
      .filter(a => !a.thumbnail_url)
      .forEach(a => console.log('No thumbnail:', a.id, a.title?.rendered));

    res.render('news', { articles });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log('--- axios error ---');
      console.log('status:', err.response?.status);
      console.log('headers:', err.response?.headers);
      console.log('data:', err.response?.data);
      console.log('url:', err.config?.baseURL + (err.config?.url || ''));
      return res.status(err.response?.status || 500).send('External API error');
    }
    next(err);
  }
});

module.exports = newsRouter;
