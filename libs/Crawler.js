const Xray = require('x-ray');

module.exports = class Crawler{

	constructor(){

		this.limit = 5;

		this.timeout = 5000;

		this.x = new Xray();

		this.x.timeout(5000).throttle(1,1000);
	}

	static crawl(url, op, callback){

		let instance = new Crawler();

		instance.x(url, op.root, [op.at])
		.paginate(op.paginate)
		.limit(5)( (err, obj) => {
			callback(obj);
		});
	}

}