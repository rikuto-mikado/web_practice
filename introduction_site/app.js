const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer"); 
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


/* --------------------------
   Site content data
-------------------------- */
const blogPosts = [
    {
        id: 1,
        title: "How I Fixed Nodemailer's 'Missing Credentials' Error with Gmail",
        date: "August 04, 2025",
        summary: "This error was misleading. The root cause was a failure to load my .env file. Here's a quick guide on how to debug dotenv and solve this EAUTH issue for good.",
        slug: "nodemailer-missing-credentials-error"
    },
    {
        id: 2,
        title: "Why My EJS Template Threw an 'active is not defined' Error After a Form POST",
        date: "August 03, 2025",
        summary: "The page worked fine on a GET request, but crashed after submitting a form. Let's dive into why you must pass all required variables to res.render() in your POST routes, too.",
        slug: "ejs-active-is-not-defined"
    },
];


/* --------------------------
   Page Routing
-------------------------- */
const pageRoutes = [
    {
        path: '/',
        template: 'pages/home',
        title: 'Home',
        active: 'bio'
    },
    {
        path: '/portfolio',
        template: 'pages/portfolio',
        title: 'Portfolio',
        active: 'portfolio'
    },
    {
        path: '/contact',
        template: 'pages/contact',
        title: 'Contact',
        active: 'contact'
    },
];

pageRoutes.forEach(route => {
    app.get(route.path, (req, res) => {
        res.render(route.template, {
            title: route.title,
            active: route.active,
            successMessage: null,
            errorMessage: null
        });
    });
});

app.get('/blog', (req, res) => {
    res.render('pages/blog', {
        title: 'Blog',
        active: 'blog',
        posts: blogPosts
    });
});

app.get('/blog/:slug', (req, res) => {
    
    const postSlug = req.params.slug;
    
    const post = blogPosts.find(p => p.slug === postSlug);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    res.render('pages/post-detail', {
        title: post.title,
        active: 'blog',
        post: post
    });
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
            console.error("Error sending mail:", error);
            return res.render("pages/contact", {
                title: "Contact",
                active: "contact",
                successMessage: null,
                errorMessage: "Failed to send. Please try again."
            });
        }

        console.log("Message sent:", info.response);
        res.render("pages/contact", {
            title: "Contact",
            active: "contact",
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