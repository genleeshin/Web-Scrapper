const config = require('./config'),
	event = require('./libs/Event'),
	app = require('./App'),
	db = require('./db/db');
	
/**
	++ insert products
		++ on exists update timestamp
	++ get stores that are not updated today
	++ update store timestamp once crawling done
	++ get stores and opt from db
	++ add eventing on new data
	-- database
		++ store active, deactive, if active then crawl
		++ url active, deactive, if active then crawl
		++ product sku is unique
		++ if sku exists update price and timestamp
		-- on new set active to no
	-- image
		-- get all new products and store their image

	-- detect errors, e.g: site is down or ip blocked

*/

//catch any event errors

process.on('uncaughtException', (err) => {

	console.error('Caught process errors');

	//console.error('Event Error: ', err);
});

event.register(config.listeners);

app.start();

// let data = [
	
// 	{
// 		store_id: 1,
// 		sku: '1-1',
// 		title: 'Denit Shirt XS'
// 	},

// 	{
// 		store_id: 1,
// 		sku: '1-2',
// 		title: 'Blue Jeans 24'
// 	},

// 	{
// 		store_id: 2,
// 		sku: '2-1',
// 		title: 'Dress 1'
// 	},

// 	{
// 		store_id: 2,
// 		sku: '2-2',
// 		title: 'Skirt 2'
// 	}

// ];

