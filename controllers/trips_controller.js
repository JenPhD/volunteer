/**
 * Created by JPemberton on 10/21/2016.
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

// =================================================================
// Routes
// =================================================================
//Use the Trip model to find the trip search terms for each trip saved by a user.
//Where the user id is the users email
//and use the include option to grab info from the User model.
//This will show the trip search terms for each trip and the user who created it
router.get('/', function (req, res) {
    models.Trip.findAll({
        include: [ models.User ],
        where: {user_id: req.session.user_id}
        //then...
    }).then(function(trips) {
        //grab the user info from our req.
        //This info gets saved to req via the users-controller.js file
        res.render('index', {
            name: req.session.name,
            user_id: req.session.user_id,
            email: req.session.email,
            logged_in: req.session.logged_in,
            trips: trips
        })
    })
});

//Use the Trip model to create a trip based on what's
//passed in req.body (depcity, destcity, depart, return, numvol)
router.post('/create', function (req, res) {
    models.create({
        depcity: req.body.depcity,
        destcity: req.body.destcity,
        depart: req.body.depart,
        return: req.body.return,
        numvol: req.body.numvol,
        user_id: req.session.user_id
    })
    // connect the .create to this .then
        .then(function() {
            res.redirect('/');
        })
});

// Use the Trip model to update and save new Trip search terms
//if the user updates the dates or cities using
// the id of the trip (as passed in the url)
router.put('/update/:id', function (req, res) {
    models.Trip.update(
        {
            depcity: req.body.depcity,
            destcity: req.body.destcity,
            depart: req.body.depart,
            return: req.body.return,
            numvol: req.body.numvol,
        },
        {
            where: { id : req.params.id }
        })
    // connect it to this .then.
        .then(function (result) {
            res.redirect('/trips');
        })
});

//Use the Sequelburger model to delete a burger
//based on the id passed in the url
router.delete('/delete/:id', function(req,res) {
    models.Trip.destroy({
        where: {
            id: req.params.id
        }
    })
    // connect it to this .then.
        .then(function() {
            res.redirect('/');
        })
});



module.exports = router;
