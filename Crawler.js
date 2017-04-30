const Xray = require('x-ray');

const async = require('async');

module.exports = class Crawler{

	constructor(){

		this.limit = 5;

		this.timeout = 5000;

		this.x = new Xray();

		this.x.timeout(5000).throttle(1,5000);
	}

	static crawl(store, resolve, reject){

		let instance = new Crawler();

		instance.store = store;

		let funcs = [];

		store.urls.forEach( url => funcs.push(
			function(callback){
				instance.start(url, store.op, callback);
			}
		));

		async.series(funcs, function(err, result){
			//console.log(result);
			console.log('all done');
			resolve(store.name);

		});
	}

	start(url, op, callback){

		let self = this;

		this.x(url, op.root, [op.at])
		.paginate(op.paginate)
		.limit(5)( (err, obj) => {
			self.processData(err, obj);
			callback(err, obj);
		});
	}

	processData(err, obj){
		console.log(obj);
	}

}