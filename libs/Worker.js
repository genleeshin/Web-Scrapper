const config = require('./../config');

module.exports = class Worker{

	constructor(){
		this.tasks = [];
		this.queues = [];
	}

	work(){

		return Promise.all(this.tasks);

	}

	task(task){

		this.tasks.push(task);

	}

	queue(queue){

		this.queues.psuh(queue);

	}

	onCompleteTask(data){
		console.log(data);
	}

}