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

// Home Page
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});

// About Page
app.get('/about', (req, res) => {
  res.render('pages/about', { title: "About Us" });
});

// Contact Page
app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us' });
});


/* --------------------------
   Contact Form (POST handler)
-------------------------- */

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address from .env
      pass: process.env.EMAIL_PASS  // App password from .env
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Failed to send:", error);
      return res.send("Failed to send message. Please try again.");
    }
    console.log("Message sent:", info.response);
    res.send("Your message was sent successfully. Thank you!");
  });
});


/* --------------------------
   Start Server
-------------------------- */
app.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
