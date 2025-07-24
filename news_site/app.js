const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

/* Static Files */
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/image', express.static(__dirname + '/public/image'));
app.use('/js', express.static(__dirname + '/public/js'));

/* Templating Engine */
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

/* Routes */
const newsRouter = require('./src/routes/news');

app.use('/', newsRouter)

/* Listen on port 3000 */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})