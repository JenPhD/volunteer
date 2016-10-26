describe('Login username and password', function(){
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
	var router = require("../controllers/users_controller.js");
	app.use(router);

// starts server each time spec is tested //
	beforeEach(function(){
		server = app.listen(3000);
	})
// stops server after each spec is tested //
	afterEach(function(){
		server.close();
	})
	// initializing spec to test users_controller post function to make sure there is a username and password stored in database //
	it("does not responds to /login", function(done){
		request(server)
		.post('/login')
		.send({
			email: 'mcflasco@gmail.com',
			password: '12345'
		})
		.set('Accept', 'application/json')
		// .field("email", "mcflasco@gmail.com")
		// .field('password', '12345')	
		.end(function(err, res) {
			var location = res.header.location;
			expect(location).toBe('/');
			done();
		});
	})
})


		

