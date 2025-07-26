const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', [
  path.join(__dirname, 'src', 'views'),
  path.join(__dirname, 'src', 'views', 'partial'),
]);
app.set('view engine', 'ejs');

/* Static Files */
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/image', express.static(__dirname + '/public/image'));
app.use('/js', express.static(__dirname + '/public/js'));

/* Routes */
const newsRouter = require('./src/routes/news');
app.use('/', newsRouter);

/* Listen */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
