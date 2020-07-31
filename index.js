const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000, () =>{console.log('listening!')});


app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/contact-us', (req, res) => {
    res.render('contact-us');
})


