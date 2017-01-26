// import 'babel-polyfill';
require('babel-polyfill');
import express from 'express';
import mongoose from 'mongoose';
// var mongoose  = require('mongoose');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

// substituting mongoose Promise with Node's due to deprecation
mongoose.Promise = global.Promise;

// creating the Schema for persistent objects
var d = new Date();
var dateString = " => Date: " + (d.getMonth()+1)  + "/" + d.getDate() + "/" + d.getFullYear() + " Time: " +
d.getHours() + ":" + d.getMinutes();

var EnergySchema = mongoose.Schema({
    userValue: {
        type: String,
        required: true
    },
    time: {
        // type: Date,
        // default: Date.now
        type: String,
        default: dateString
    }
});



// creating Model for Mongo to store documents according to the Schema
var Energy = mongoose.model('energyRecord', EnergySchema);

// Connection to MongoDB through Mongoose
mongoose.connect('mongodb://localhost/energyManagement');
mongoose
    .connection
    .once('open', () => {
        console.log('Connection is Open')
    })
    .on('error', () => {
        console.log('Error in Connection')
    });

// creating a new record in the above DB & Collections
var entry = new Energy({userValue: 7});

// saving the new instance to MongoDB entry.save().then((resp) => {
// console.log(resp) });

app.use(express.static(process.env.CLIENT_PATH));
app.use(bodyParser.json());

// endpoints get endpoint
import morgan from 'morgan';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
app.use(morgan('common'));

app.get('/energy', (req, res) => {
    // res.json(entry.userValue);
    Energy
        .find()
        .lean()
        .exec((err, data) => {
            if (err) {
                return res
                    .status(500)
                    .json({message: 'Internal Server Error'})
            } else {
                res.json(data)
            }
        });
});

app.post('/energy', (req, res) => {
    Energy.create({
        // either from 'entry' or from user 'submit'
        userValue: req.body.entry
        // 10
    }, (err, input) => {
        if (err) {
            console.log(err)
            return res
            
                .status(500)
                .json({message: 'Internal Server Error'});
        }
        res.status(201).json(input);
    });
});

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
