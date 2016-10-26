// Jasmine unit testing to determine the login parameters, submit function, and error message is working properly //


// describe('login', function(){

// 	var login = require("......");

// 	// it('login button switches to login information section', function(){
// 	// 	expect(login)
// 	// });

// // // not sure if we will need these but i put them in just incase //
// // 	it('check if username was entered in login', function(){
// // 		expect(login.username).tobe(true);
// // 	});
// // // not sure if we will need these but i put them in just incase //
// // 	it('check if password was entered in login section',function(){
// // 		expect(login.Password).tobe(true);
// // 	});

// // 	it('error message displays when information has been submitted incorrectly or left blank', function(){
// // 		expect(login.error).tothrowError('Please enter the required information.');
// // 		expect(login.error).tothrowError(typeError);
// // 	});

// // 		it('sumbit function of username form', function(){
// // 		expect(login).toequal(login);
// // 	});

// });

// Jasmine unit testing to determine the login parameters, submit function, and error message is working properly //

// test shell created incase form is made //


// describe('creates login username and password', function(){
// 	var request = require('supertest');
// 	var express = require('express');
// 	var app = express();

// 	var bodyParser = require('body-parser');
// 	app.use(bodyParser.json());
// 	app.use(bodyParser.urlencoded({ extended: false }));
// 	var session = require('express-session');

// 	var cookieParser = require('cookie-parser');
// 	app.use(session({ secret: 'app', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));
// 	app.use(cookieParser());

// 	var server;
// 	// var router = require("../controllers/login_controller.js");
// 	app.use(router);

// 	beforeEach(function(){
// 		server = app.listen(3000);

// 		beforeEach(function(){
// 		server = app.listen(3000);
// 	})

// 	afterEach(function(){
// 		server.close();
// 	})

// 	})
// 	it("does not responds to /login", function(done){
// 		request(server)
// 		.post('/')
// 		.send({
// 			email: 'mcflasco@gmail.com',
// 			password: '12345'
// 		})
// 		.set('Accept', 'application/json')
// 		// .field("email", "mcflasco@gmail.com")
// 		// .field('password', '12345')	
// 		.end(function(err, res) {
// 			var location = res.header.location;
// 			expect(location).toBe('/');
// 			done();
// 		});
// 	})
// })