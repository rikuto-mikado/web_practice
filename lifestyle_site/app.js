const express = require("express");
const path = require("path");
const sassMiddleware = require('sass-middleware');

const app = express();


/* sass_middle_ware */
app.use (
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, 'public/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
  })
);


/* img */
app.use(express.static(path.join(__dirname, 'public')));


/* ejs_setting */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* routining */
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'ホーム' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: "About Us" })
});

app.get('contact', (req, res) => {
  res.render('pages/contact', { title: ' Contact Us' });
});


/* lanching_server */
app.listen(3000, () => {
  console.log('http://localhost:3000');
});