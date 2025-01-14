const mongoose = require('mongoose');
const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {console.log("MONGO CONNECTION OPEN!!!")})
.catch(err => {console.log("OH NO MONGO CONNECTION ERROR!!!!")})
const seedProducts = [
{name: 'Barney', age: 2, category: 'Dog', desc: 'Barney is very cute and you must adopt him'},
{name: 'Napkin', age: 1, category: 'Dog', desc: 'Mikey is very cute and you must adopt him'},
{name: 'Mikey', age: 3, category: 'Dog', desc: 'Napkin is very scary, he has a past in crime and specializes in the arts of killing you must adopt him!'},
{name: 'Arthur', age: 5, category: 'Cat', desc: 'Arthur is very cute and you must adopt her'},
{name: 'Bella', age: 2, category: 'Cat', desc: 'Bella is very cute and you must adopt her'},
]
Product.insertMany(seedProducts).then(res => {console.log(res)})
.catch(e => {console.log(e)})