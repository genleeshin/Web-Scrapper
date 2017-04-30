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

crawler.crawl(urls);

crawler.crawl(urls2);


