const utils = require('./utils');
const expect = require('expect');
  // to run tests======>
  //npm test
  //nodemon --exec 'npm test'

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(33,11);
			// if (res !== 44){
			// 	throw new Error(`expected 44, but got ${res}`);
			// }
			expect(res).toBe(44).toBeA('number');
		});

		it('should async add two numbers', (done) =>{
			utils.asyncAdd(3,4, (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});

		});
	})
	
	describe('#square', () => {
		it('should return square', () => {
			var res = utils.square(2);
			// if (res !== 4){
			// 	throw new Error(`expected 44, but got ${res}`);
			// }
			expect(res).toEqual(4)
			// .toBeA('number')
		});

		it('should async add two numbers', (done) =>{
			utils.asyncSquare(3, (square) => {
				expect(square).toBe(9).toBeA('number');
				done();
			});

		});
	});
	
	it('should set firstname and lastname', () => {
		var user = {location: 'San Francisco', age: 31}
		var userObj = utils.setName(user,'Aigul Imadildayeva');
		expect(userObj).toInclude({
				firstname: 'Aigul',
				lastname: 'Imadildayeva'
			});
	});
});
