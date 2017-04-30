const crawler = require('./Crawler');

var start_time = new Date();

var urls = [
	"http://localhost:3000/index.php?cat=shirt",
	"http://localhost:3000/index.php?cat=jeans"
];

var urls2 = [
	"http://localhost:3000/index.php?cat=dress",
	"http://localhost:3000/index.php?cat=skirt"
];

let stores = [
	{
		name: 'argos',

		urls: urls,

		op: {
			root: 'li',

			at: {
				title: 'h2'
			},

			paginate: 'a@href'
		}

	},

	{
		name: 'asos',

		urls: urls2,

		op: {
			root: 'li',

			at: {
				title: 'h2'
			},

			paginate: 'a@href'
		}
	}

];

//store all promises
let p = [];

stores.forEach(store => {

	p.push(
		new Promise(
			(resolve, reject) => {

				crawler.crawl(store, resolve, reject);
			}
		)
	);
});

Promise.all(p).then( data => {
	console.log(data);
	console.log('done all promises');
});


