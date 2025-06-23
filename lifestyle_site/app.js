const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: "EJS_page", message: "Hello EJS!!"});
});

app.listen(3000, () => {
  console.log('This site is working on http://localhost:3000');
});