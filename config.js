exports.db = {
	host: 'localhost',
	user: 'root',
	pass: 'pass'
};


exports.image = {
	dir: '/tmp'
};

exports.stores = [
	{

		name: 'asos',

		root: 'li',

		at: {
			title: 'h2'
		},

		paginate: 'a@href'		
	},

	{

		name: 'argos',

		root: 'li',

		at: {
			title: 'h2'
		},

		paginate: 'a@href'		
	}
];

exports.urls = {
	asos: ["http://localhost:3000/index.php?cat=shirt", "http://localhost:3000/index.php?cat=jeans"],

	argos: ["http://localhost:3000/index.php?cat=dress", "http://localhost:3000/index.php?cat=skirts"],
};