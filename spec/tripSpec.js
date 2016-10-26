describe('Users choice for trip and volunteer location', function(){
	var request = require('supertest');

	// setting up server on test spec so jasmine can test with the database //
	var express = require('express');
	var app = express();

	var bodyParser = require('body-parser');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	var session = require('express-session');

	var cookieParser = require('cookie-parser');
	app.use(session({ secret: 'app', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));
	app.use(cookieParser());

	var server;
	var router = require("../controllers/trips_controller.js");
	app.use(router);

// starts server each time spec is tested //
	beforeEach(function(){
		server = app.listen(3000);
	})

// stops server after each spec is tested //
	afterEach(function(){
		server.close();
	})

// initializing spec to test trip_controller post function to make sure there is a username and password stored in database //
	it("does not store information into database", function(done){
		request(server)
		.post('/')
		.send({
			// hard code from mysql selections to test fromn database //
		depcity: req.body.depcity,
        destcity: req.body.destcity,
        depart: req.body.depart,
        return: req.body.return,
        numvol: req.body.numvol,
        user_id: req.session.user_id
        })
        .set('Accept', 'application/json')
        .end(function(err, req){
        	var location = req.header.location;
        	expect(location).tobe("/");
        	done();
        })
    });
})
