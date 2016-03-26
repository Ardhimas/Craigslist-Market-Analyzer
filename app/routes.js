// app/routes.js

// grab the car model we just created
var Car = require('./models/car');
var express = require('express');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        // app.get('/api/cars', function(req, res) {
        //     // use mongoose to get all cars in the database
        //     car.find(function(err, cars) {

        //         // if there is an error retrieving, send the error. 
        //                         // nothing after res.send(err) will execute
        //         if (err)
        //             res.send(err);

        //         res.json(cars); // return all cars in JSON format
        //     });
        // });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)
        var router = express.Router();              // get an instance of the express Router
        
        // middleware to use for all requests
        router.use(function(req, res, next) {
            // do logging
            console.log('Something is happening.');
            next(); // make sure we go to the next routes and don't stop here
        });
        
        // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
        router.get('/', function(req, res) {
            res.json({ message: 'hooray! welcome to our api!' });   
        });
        
        router.route('/cars')
        
            // create a car (accessed at POST http://localhost:8080/api/cars)
            .post(function(req, res) {
                
                var car = new Car();      // create a new instance of the Car model
                car.name = req.body.name;  // set the cars name (comes from the request)
        
                // save the car and check for errors
                car.save(function(err) {
                    if (err)
                        res.send(err);
        
                    res.json({ message: 'Car created!' });
                });
            })
        
            // get all the cars (accessed at GET http://localhost:8080/api/cars)
            .get(function(req, res) {
                Car.find(function(err, cars) {
                    if (err)
                        res.send(err);
        
                    res.json(cars);
                });
            });
        
        // more routes for our API will happen here
        
        // REGISTER OUR ROUTES -------------------------------
        // all of our routes will be prefixed with /api
        app.use('/api', router);
        

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };