const config = require('./../config');

module.exports = class Store{

	constructor(){

	}

	getStores(){

		console.log('getting stores');

		this.stores = this.stores || config.stores;

		this.stores.forEach(store => {
			store.urls = config.urls[store.name];
		})

		return this.stores;
	}

}