let mongodb = require("mongodb");
let client = mongodb.MongoClient;
let postlogin = require("express").Router().post("/", (req, res) => {

    client.connect("mongodb://localhost:27017/FSD54", (err, db) => {
        // res.send(req.body)
        if (err) {
            throw err;
        } else {
            db.collection("participants").insertOne({ firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, password: req.body.password }, (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.send({ message: '1 document inserted' })
                    db.close();
                }
            });
        }
    });
});


module.exports = postlogin;