Product = require('./../models/Product');

module.exports = {

	handle(data){

		this.formatData(data);

		console.log('inserting', data.store_id);

		Product.insertBulk(data.items);
	},

	formatData(data){

		data.items.forEach(item => {item.store_id = data.store_id});

	}
}