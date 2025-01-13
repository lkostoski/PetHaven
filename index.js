const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('slideshow.ejs');
});

app.get('/DogInfo', (req,res)=>{
    res.render('DogInfo.ejs');
});

app.get('/CatInfo', (req,res)=>{
    res.render('CatInfo.ejs');
});

app.get('/LogIn', (req,res)=>{
    res.render('LogIn.ejs');
});

app.get('/SignUp', (req,res)=>{
    res.render('SignUp.ejs');
});

app.get('/OtherInfo', (req,res)=>{
    res.render('OtherInfo.ejs');
});

app.get('/AdoptIndividual', (req,res)=>{
    res.render('Adopt_Individual.ejs');
});

app.get('/Adopt', (req,res)=>{
    res.render('Adopt.ejs');
});

app.get('/AdoptForm', (req,res)=>{
    res.render('AdoptForm.ejs');
});

app.get('/Shelters', (req,res)=>{
    res.render('Shelters.ejs');
});

app.listen(port, ()=>{
    console.log("Server started on port "+port);
});
