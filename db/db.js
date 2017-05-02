const config = require('./../config').knex,
	knex = require('knex');

module.exports = {

	knex: null,

	getInstance: function(){

		if(this.knex) {
			return this.knex;
		}

		this.knex = new knex(config);

		return this.knex;

	},

	all: function(table, callback){
		this.getInstance().select().from(table).then((result) => {

			callback(result);

		}).catch((error) => {

			console.log(error);
		})
	},

	select: function(fields=['*']){
		return this.getInstance().select(fields);
	},

	update: function(table, id, data){
		return this.getInstance()(table).where('id', id).update(data);
	},

	table: function(table){
		return this.getInstance()(table);
	},

	now: function(){
		return this.getInstance().raw('NOW()');
	},

	curdate: function(){
		return this.getInstance().raw('CURDATE()');
	},

	destroy: function(){
		this.getInstance().destroy();
		this.knex = null;
	}
}