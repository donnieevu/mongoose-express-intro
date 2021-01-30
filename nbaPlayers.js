const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/californiaNbaJerseys', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!");
        console.log(err);
    })

// const p = new Product({
//     name: 'Stephen Curry',
//     price: 110.00,
//     category: 'warriors'
// })
// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(e => {
//         console.log(e);
//     })

const jerseyProducts = [
    {
        name: 'Klay Thompson',
        price: 100.00,
        category: 'warriors'
    },
    {
        name: 'Lebron James',
        price: 199.99,
        category: 'lakers'
    },
    {
        name: 'Anthony Davis',
        price: 129.99,
        category: 'lakers'
    },
    {
        name: 'Kawhi Leonard',
        price: 119.99,
        category: 'clippers'
    },
    {
        name: 'Paul George',
        price: 109.99,
        category: 'clippers'
    }
]
Product.insertMany(jerseyProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })