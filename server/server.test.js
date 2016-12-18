const request = require('supertest');
const expect = require('expect')
var app = require('./server.js').app;

describe('Server', ()=>{
	describe('Get /', ()=> {
		it('should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect((res) =>{
					expect(res.body).toInclude({
						error: 'Page not found',
						name: 'Todo App v1.0'
					});
				})
				.end(done)
		});	
	})
	
	describe('Get /users', ()=> {

		it('should return user object', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) =>{
					expect(res.body).toInclude({
						name: 'Aigul',
						age: 31
					});
				})
				.end(done)
		});
	});	
})
