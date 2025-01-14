const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const Pet = require('./src/models/pet');

mongoose.connect('mongodb://localhost:27017/PetHaven', { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => {console.log("MONGO CONNECTION OPEN!!!")})
    .catch(err => {console.log("MONGO CONNECTION ERROR!!!!")});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('Home');
});

app.get('/pets', async (req, res) => {
    const pets = await Pet.find({});
    res.render('pets/index', { pets });
});

app.get('/pets/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`Received ID: ${id}`);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid ID');
    }
    const pet = await Pet.findById(id);
    if (!pet) {
        return res.status(404).send('Pet not found');
    }
    res.render('pets/show', { pet });
});

app.get('/PetInfo/DogInfo', (req,res)=>{
    res.render('DogInfo');
});

app.get('/PetInfo/CatInfo', (req,res)=>{
    res.render('CatInfo');
});

app.get('/Account/LogIn', (req,res)=>{
    res.render('LogIn');
});

app.get('/Account/SignUp', (req,res)=>{
    res.render('SignUp');
});

app.get('/PetInfo/OtherInfo', (req,res)=>{
    res.render('OtherInfo');
});

app.get('/Adoption/AdoptIndividual', (req,res)=>{
    res.render('Adopt_Individual');
});

app.get('/Adoption/Adopt', (req,res)=>{
    res.render('Adopt');
});

app.get('/Adoption/AdoptForm', (req,res)=>{
    res.render('AdoptForm');
});

app.get('/Adoption/Shelters', (req,res)=>{
    res.render('Shelters');
});

app.get('/PetShop/Item', (req,res)=>{
    res.render('Item');
});

app.get('/PetShop/Store', (req,res)=>{
    res.render('Store');
});

app.listen(port, ()=>{
    console.log("Server started on port "+port);
});