const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("layout", "layout");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "Home",
    successMessage: null,
    errorMessage: null
  });
});

// POST routing
app.post("/contact", (req, res) => {
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
    subject: `New message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending mail:", error);
      return res.render("pages/contact", {
        title: "Contact Us",
        successMessage: null,
        errorMessage: "Failed to send the message. Please try again later."
      });
    }

    // LAUNCH SERVER
    res.render("pages/contact", {
      title: "Contact Us",
      successMessage: "Your message was sent successfully!",
      errorMessage: null
    });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
