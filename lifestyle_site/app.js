const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

/* img */
app.use(express.static(path.join(__dirname, 'public')));

/* EJS_template */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* EJS_layout */
app.use(expressLayouts);
app.set('layout', 'layout');

/* routing */
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: "About Us" });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us' });
});

/* lanching_server */
app.listen(3000, () => {
  console.log('http://localhost:3000');
});
