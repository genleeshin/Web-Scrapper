const config = require('./../config'),
	db = require('./../db/db');

module.exports = {

	stores: null,

	getStores: function(callback){

		// to get store that was crawled before today

		// where('active', 1).where('updated_at', '<', db.curdate())

		db.select().from('stores').where('active', 1).then(stores => {

			stores.forEach(store => {
				store.opt = JSON.parse(store.opt);
			});

			return stores;

		})

		.then( stores => {

			callback(stores);

		});
	},

	updateLastCrawlTime(id, callback=null){

		console.log('updating store timestamp ', id);

		db.table('stores').where({id: id}).update({updated_at: db.now()})
		.then( result => {
			if(callback) callback(result);
		})
		.catch( errors => console.log('error updating'));

	}

}