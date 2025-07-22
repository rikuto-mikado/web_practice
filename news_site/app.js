const express = require('express');

const app = express();
const port = 5000;

/* Static Files */
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/image', express.static(__dirname + '/public/image'));
app.use('/js', express.static(__dirname + '/public/js'));

/* Templating Engine */


/* Listen on port 5000 */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})