const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

dotenv.config();

const app = express();

/* --------------------------
   Middleware Settings
-------------------------- */

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS with layout support
app.use(expressLayouts);
app.set('layout', 'layout');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* --------------------------
   Page Routing
-------------------------- */
app.get('/', (req, res) => {
   res.render('pages/home', {title: 'Home'});
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About Us' });
});

app.get('/about', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us' });
});

/* --------------------------
   Contact Form (POST handler)
-------------------------- */





/* --------------------------
   Start Server
-------------------------- */

app.listen(3000, () => {
    console.log('Server is working at http://localhost:3000');
});