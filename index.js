const config = require('./config'),
	event = require('./libs/Event'),
	app = require('./App'),
	db = require('./db/db');
/**
	-- get stores and opt from db
	** add eventing on new data
	-- database
		-- store active, deactive, if active then crawl
		-- url active, deactive, if active then crawl
		-- product sku is unique
		-- if sku exists update price and timestamp
		-- on new set active to no
	-- image
		-- get all new products and store their image

*/

//catch any event errors

process.on('uncaughtException', (err) => {
  console.error('Event Error: ', err);
});

event.register(config.listeners);

app.start();




// db.select().from('stores').where({id: 1}).first()

// .then( store => {

// 	let opt = JSON.parse(store.opt);

// 	console.log(opt.root);

// })

// .finally( ()=> db.destroy());

