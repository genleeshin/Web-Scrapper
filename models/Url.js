const config = require('./../config'),
	db = require('./../db/db');

module.exports = {

	urls: null,

	getStoreUrls: function(store_id, callback){

		//console.log('getting store urls for ', store_id);

		db.select().from('urls')

		.where({store_id: store_id, active: 1})

		.then( urls => {

			callback(urls);
			
		})

		.catch( errors => console.log(errors.code) );

	}

}