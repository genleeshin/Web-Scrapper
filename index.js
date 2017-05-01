const config = require('./config');
const Worker = require('./libs/Worker');
const event = require('./libs/Event');
/**
	** add eventing on new data
	-- database
		-- product sku is unique
		-- if sku exists update price and timestamp
		-- on new set active to no
	-- image
		-- get all new products and store their image

*/

// catch any event errors

process.on('uncaughtException', (err) => {
  console.error('Event Error: ', err);
});

event.register(config.listeners);

let worker = new Worker();

worker.work();

