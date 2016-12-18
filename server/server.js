const express = require('express');

var app = express();

app.get('/', (req, res) => {
	// res.status(200).send('Hello world!');
	res.status(404).send({
			error: 'Page not found',
			name: 'Todo App v1.0'
		}
		);
});

app.get('/users', (req, res) => {
	res.send([{
			name: 'Aigul',
			age: 31
		},
		{
			name: 'Michela',
			age: 35
		}]);
});

app.listen(3000);

module.exports.app = app;