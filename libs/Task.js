const async = require('async');



module.exports = class Task{

	constructor(){
		this.tasks = [];
	}

	queue(store){
		this.tasks.push( new Promise(
			(resolve, reject) => {

				this.crawl(store, resolve, reject);
			}
		));
	}

}