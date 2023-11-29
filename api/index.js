const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors());
app.use(express.json());

mongoose.connect( 'mongodb+srv://rakeshsagala:HzJdidTTZfm6Q8Hz@reddy.9ngyo3g.mongodb.net/?retryWrites=true&w=majority' );

app.post('/register', async(req,res) =>{
    const {firstname,lastname,username,password}= req.body;
    try{
        const userDoc = await User.create({firstname,lastname,username, password});
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e.message);
    }
});

app.listen(4000,
    
    );
    
//HzJdidTTZfm6Q8Hz