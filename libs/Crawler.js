const Xray = require('x-ray');

const async = require('async');

const event = require('./Event');

module.exports = class Crawler{

	constructor(){

		this.limit = 5;

		this.timeout = 5000;

		this.x = new Xray();

		this.x.timeout(5000).throttle(1,5000);
	}

	static crawl(op, resolve, reject){

		let instance = new Crawler();


		let funcs = [];

		op.urls.forEach( url => funcs.push(
			function(callback){
				instance.start(url, op, callback);
			}
		));

		async.series(funcs, function(err, result){
			//console.log(result);
			//console.log('all done');
			resolve(op.name);

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
		event.trigger('scrap-data', obj);
	}

}