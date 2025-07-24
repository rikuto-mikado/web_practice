const express = require('express');
const newsRouter = express.Router();

newsRouter.get('', async(req, res) => {
    res.render('partial/news');
});

module.exports = newsRouter;