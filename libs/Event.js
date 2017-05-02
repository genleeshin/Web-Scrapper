const EventEmitter = require('events');

module.exports = class Event extends EventEmitter{

	fire(event, data){

		this.emit(event, data);
	}

	listen(event, callback){
		this.on(event, (data) => {
			setImmediate(() => {
			    callback(data);
			});
		});
	}

	static trigger(event, data){
		

		this.getInstance().emit(event, data);
	}

	static register(listeners){
		this.data = this.data || [];

		listeners.forEach(listener => {
			this.getInstance().listen(listener.event, function(data) {

				(require(listener.listener)).handle(data);

			});
		});
	}

	static getInstance(){
		if(typeof this.instance == 'undefined'){
			this.instance = new Event();
		}

		return this.instance;
	}

}