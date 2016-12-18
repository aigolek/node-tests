const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__
// app.__get__
describe('App', () => {
	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db)

	it('Should call the spy correctly', () =>{
		var spy = expect.createSpy();
		
		// spy();
		// expect(spy).toHaveBeenCalled();
		spy('Aigul', 31);
		expect(spy).toHaveBeenCalledWith('Aigul', 31);
	});

	it('should call saveUser with user object', () => {
		var email = 'aigolekij@gmail.com';
		var password = '123abc';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});