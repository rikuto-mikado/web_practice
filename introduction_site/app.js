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
        title: "NodemailerでGmail送信時に 'Missing credentials' エラーが出た話",
        date: "2025-08-04",
        summary: "原因は.envファイルの読み込み失敗でした。dotenvが正しく動作しているか確認する方法と、具体的な解決策をまとめます。",
        slug: "nodemailer-missing-credentials-error" // 記事ページ用のURL
    },
    {
        id: 2,
        title: "EJSで 'active is not defined' エラー？原因はPOST処理のrenderでした",
        date: "2025-08-03",
        summary: "GETリクエストでは問題なかったのに、フォーム送信後にエラーが。POSTリクエスト時のres.renderにも忘れずに変数を渡しましょう。",
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