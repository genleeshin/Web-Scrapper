const config = require('./config'),
	event = require('./libs/Event'),
	app = require('./App'),
	db = require('./db/db');
	


process.on('uncaughtException', (err) => {

	console.error('Caught process errors');

	//console.error('Event Error: ', err);
});

event.register(config.listeners);

app.start();

