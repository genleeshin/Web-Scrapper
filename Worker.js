const config = require('./config');
const Store = require('./Store');
const crawler = require('./Crawler');

module.exports = class Worker{

	constructor(){
		this.store = new Store();
		this.recurse = 0;
	}

	work(){

		this.stores = this.stores || this.store.getStores();

		this.start();

	}

	start(){

		let self = this;

		var start_time = new Date();

		//store all jobs
		let p = [];


		this.stores.forEach(store => {

			p.push(
				this.crawl(store)
			);
		});


		Promise.all(p).then( data => {

			self.recurse++;

			console.log(data);

			console.log('-----------------------');

			console.log('Finished Work: ', self.recurse);

			var end = (new Date() - start_time)/1000;
			
			console.log('Time took: ' + end + ' seconds');

			console.log('-----------------------');

			console.log('now waiting 1 minutes before restarting again');

			setTimeout(()=>self.start(), 60000);


		});
	}

	crawl(store){
		return new Promise(
			(resolve, reject) => {

				crawler.crawl(store, resolve, reject);
			}
		)
	}

}