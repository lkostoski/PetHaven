const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('Home.ejs');
});

app.get('/PetInfo/DogInfo', (req,res)=>{
    res.render('DogInfo.ejs');
});

app.get('/PetInfo/CatInfo', (req,res)=>{
    res.render('CatInfo.ejs');
});

app.get('/Account/LogIn', (req,res)=>{
    res.render('LogIn.ejs');
});

app.get('/Account/SignUp', (req,res)=>{
    res.render('SignUp.ejs');
});

app.get('/PetInfo/OtherInfo', (req,res)=>{
    res.render('OtherInfo.ejs');
});

app.get('/Adoption/AdoptIndividual', (req,res)=>{
    res.render('Adopt_Individual.ejs');
});

app.get('/Adoption/Adopt', (req,res)=>{
    res.render('Adopt.ejs');
});

app.get('/Adoption/AdoptForm', (req,res)=>{
    res.render('AdoptForm.ejs');
});

app.get('/Adoption/Shelters', (req,res)=>{
    res.render('Shelters.ejs');
});

app.get('/PetShop/Item', (req,res)=>{
    res.render('Item.ejs');
});

app.get('/PetShop/Store', (req,res)=>{
    res.render('Store.ejs');
});

app.listen(port, ()=>{
    console.log("Server started on port "+port);
});
