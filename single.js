const xray = require('x-ray');

const x = new xray();

var start_time = new Date();

var url = "http://localhost:3000/index.php";

x.timeout(5000).throttle(1,5000);

x(url, 'li', [{title: 'h2'}])
	.paginate('a@href')
	.limit(5)(processData);


function processData(err, obj){
	console.log(obj);
}