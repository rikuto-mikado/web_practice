const express = require('express');
const axios = require('axios');

const newsRouter = express.Router();

newsRouter.get('/', async (req, res, next) => {
  try {
    const { data } = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts/');
    res.render("news", { articles: newsAPI.data })
  } catch (err) {
    if(err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    } else if(err.requiest) {
        console.log(err.requiest)
    } else {
        console.error('Error', err.message)
    }
  }
});

module.exports = newsRouter;
