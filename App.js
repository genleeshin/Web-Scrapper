const config = require('./config'),
	Worker = require('./libs/Worker'),
	db = require('./db/db.js'),
	store = require('./models/Store'),
	crawler = require('./libs/Crawler'),
	async = require('async'),
	event = require('./libs/Event');

module.exports = {

	worker: null,

	stores: null,

	recurse: 0,

	recurse_max: 2,

	start: function(){

		this.worker = new Worker();

		store.getStores(function(stores){

			this.stores = stores;

			this.queue().process();

		}.bind(this));

	},

	queue: function(){

		let self = this;		

		this.stores.forEach(store => {

			this.worker.task(new Promise( (resolve, reject) => {
				// task
				self.task(store, resolve, reject);
			}));
			
		});

		return this;

	},


	process: function(){

		self = this;

		this.worker.work().then(data => {

			self.recurse++;

			console.log('Finished Work: ', self.recurse);

			console.log(data);

			console.log('now waiting 1 minutes before restarting again');

			if(self.recurse_max>0 && self.recurse <= self.recurse_max){
				setTimeout(()=>self.queue(), 60000);
			}
		});
	},

	task: function(store, resolve, reject){

		let funcs = [];

		let self = this;

		store.urls.forEach( url => funcs.push(

			function(callback){

				crawler.crawl(url, store.opt, function(data){

					event.trigger('scrap-data', {store_id: store.id, data: data});

					callback(null, true);
				});
			}

		));

		async.series(funcs, function(err, result){
			//console.log(result);
			//console.log('all done');
			resolve(store.name);

		});

	}
}