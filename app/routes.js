// app/routes.js

// grab the car model we just created
var Car = require('./models/car');
var express = require('express');

    module.exports = function(app) {

        // server routes ===========================================================

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
                car.make = req.body.make;  // set the cars name (comes from the request)
                car.model = req.body.model;
                car.year = req.body.year;
                car.price = req.body.price;
        
                // save the car and check for errors
                car.save(function(err) {
                    if (err)
                        res.send(err);
        
                    res.json({ message: 'Car made!' });
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
        
        router.route('/cars/:car_id')
            // get the car with that id (accessed at GET http://localhost:8080/api/cars/:car_id)
            .get(function(req, res) {
                Car.findById(req.params.car_id, function(err, car) {
                    if (err)
                        res.send(err);
                    res.json(car);
                });
            })
        
            // update the car with this id (accessed at PUT http://localhost:8080/api/cars/:car_id)
            .put(function(req, res) {
        
                // use our car model to find the car we want
                Car.findById(req.params.car_id, function(err, car) {
        
                    if (err)
                        res.send(err);
        
                    //Update car info
                    car.make = req.body.make;  // set the cars name (comes from the request)
                    car.model = req.body.model;
                    car.year = req.body.year;
                    car.price = req.body.price;
        
                    // save the car
                    car.save(function(err) {
                        if (err)
                            res.send(err);
        
                        res.json({ message: 'Car updated!' });
                    });
        
                });
            })
            
            // delete the car with this id (accessed at DELETE http://localhost:8080/api/cars/:car_id)
            .delete(function(req, res) {
                Car.remove({
                    _id: req.params.car_id
                }, function(err, car) {
                    if (err)
                        res.send(err);
        
                    res.json({ message: 'Successfully deleted' });
                });
            });

        
        // REGISTER OUR ROUTES -------------------------------
        // all of our routes will be prefixed with /api
        app.use('/api', router);
        

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };