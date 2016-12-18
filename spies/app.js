var db =  require('./db.js')

module.exports.handleSignup = ((email, password) => {
	// check if the email already exists
	db.saveUser({email,password});
	// save user to db
	// send welcome email

})