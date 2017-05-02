const config = require('./../config'),
	db = require('./../db/db');

module.exports = {

	stores: null,

	getStores: function(callback){

		console.log('getting stores');

		db.select().from('stores').then(stores => {

			stores.forEach(store => {
				store.opt = JSON.parse(store.opt);
				store.urls = config.urls[store.name];
			});

			return stores;

		})

		.then( stores => {

			callback(stores);

		}).

		finally(()=>db.destroy());
	}

}