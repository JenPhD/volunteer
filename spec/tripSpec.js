describe('create username and password', function(){
	var request = require('supertest');
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

	beforeEach(function(){
		server = app.listen(3000);
	})

	afterEach(function(){
		server.close();
	})

	it("does not responds to /login", function(done){
		request(server)
		.post('/login')
		.send({
			// hard code from mysql selections to test from database //
			destcity: req.body.destcity,
            depart: req.body.depart,
            return: req.body.return,
            numvol: req.body.numvol,
        })
        .set('Accept', 'application/json')
        .end(function(err, res){
        	var location = res.header.location;
        	expect(location).tobe("/trips");
        	done()
        })
    });
})
