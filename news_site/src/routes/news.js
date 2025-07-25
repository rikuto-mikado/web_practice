const express = require('express');
const axios = require('axios');

const newsRouter = express.Router();

const api = axios.create({
  baseURL: process.env.WP_API_BASE || 'https://raddy.dev/wp-json/wp/v2', // ← まずはここを正しいURLに
  timeout: 5000,
  headers: {
    'User-Agent': 'news-site-dev'
  }
});

newsRouter.get('/', async (req, res, next) => {
  try {
    const { data: articles } = await api.get('/posts', {
      params: {
        per_page: 10,
        _fields: 'id,date,title,link,excerpt' // 必要なら
      }
    });

    res.render('news', { articles });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log('--- axios error ---');
      console.log('status:', err.response?.status);
      console.log('headers:', err.response?.headers);
      console.log('data:', err.response?.data);
      console.log('url:', err.config?.baseURL + (err.config?.url || ''));
      return res
        .status(err.response?.status || 500)
        .send('External API error');
    }
    next(err);
  }
});

module.exports = newsRouter;
