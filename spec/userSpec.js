// Jasmine testing for inputting username information to create a user name and password (name, email, password) //


// this will check that user is inputing the required information into the username create form //


describe('create username and password', function(){

// not sure if we will need these but i put them in just incase //
	it('check is name has been entered', function(){
		expect(name).tobe(true);	
	});
// not sure if we will need these but i put them in just incase //
	it('check if username was entered', function(){
		expect(userName).tobe(true);
	});
// not sure if we will need these but i put them in just incase //
	it('check if password was entered',function(){
		expect(Password).tobe(true);
	});

	it('error message displays when information has been submitted incorrectly or left blank', function(){
		expect(error).tothrowError('Please enter the required information.');
		expect(error).tothrowError('You must fill out the required fields.');
		expect(error).tothrowError(typeError);
	});

	it('sumbit function of username form', function(){
		expect(submit).tobe()
	});


});

