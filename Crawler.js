const Xray = require('x-ray');

const async = require('async');

module.exports = class Crawler{

	constructor(){

		this.limit = 5;

		this.timeout = 5000;

		this.x = new Xray();

		this.x.timeout(5000).throttle(1,5000);
	}

	static crawl(urls){

		let instance = new Crawler();

		let funcs = [];

		urls.forEach( url => funcs.push(
			function(callback){
				instance.start(url, callback);
			}
		));

		async.series(funcs, function(err, result){
			//console.log(result);
			console.log('all done');

		});
	}

	start(url, callback){

		let self = this;

		this.x(url, 'li', [{title: 'h2'}])
		.paginate('a@href')
		.limit(5)( (err, obj) => {
			self.processData(err, obj);
			callback(err, obj);
		});
	}

	processData(err, obj){
		console.log(obj);
	}

}