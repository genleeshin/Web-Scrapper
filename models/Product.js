const db = require('./../db/db');

module.exports = {

	table: 'products',

	insertBulk(data, callback=null){

		db.raw(this.buildQuery(data), this.getValues(data)).then( res => {

			console.log('success');

			if(callback) callback(res);

		}).catch(err => {

			console.log('errors', err);

		});
		
	},

	buildQuery(data){

		return [

			'insert into products(',

			this.getKeys(data),

			') values', 

			data.map( () => '(?)').join(','),

			'on duplicate key update',

			'updated_at=' + db.now()

		].join(' ');

	},

	getValues(data){

		let values = [];

		data.map( obj => {

			let v = [];

			for(let o in obj){
				v.push(obj[o]);
			}

			values.push(v);

		});

		return values;

	},

	getKeys(data){

		return Object.keys(data[0]).join(',');
	}

}