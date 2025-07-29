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
app.use(bodyParser.urlencoded({ extended: false}));

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
app.get("/", (req, res) => {
    res.render("pages/home", {title: "Home"});
});

app.get("/contact", (req, res) => {
    res.render("pages/contact", {title: "About Us"})
});


/* --------------------------
   Contact Form (POST handler)
-------------------------- */
app.post("/contact", (req, res) => {
    console.log("Received", req.body);
    const { name, email, message } = req.body;
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Rrror sending mail:", error);
            return res.render("pages/contact", {
                title: "Contact Us",
                successMessage: null,
                errorMessage: "Failed to send. Please try again."
            });
        }

        console.log("Message sent:", info.response);
        res.render("pages/contact", {
            title: "Contact Us",
            successMessage: "Message sent successfully!!",
            errorMessage: null
        });
    });
});


/* --------------------------
   Start Server
-------------------------- */

app.listen(3000, () => {
    console.log('Server is working at http://localhost:3000');
});