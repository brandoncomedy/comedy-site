import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {

	current;
	total = 0;
	timer;
	interval = 0;

	constructor() { 

		this.current = 0;
	}

	public callback (current) {


	}


	public config (options) {

		this.total = options.total;
		this.interval = options.interval;
		this.callback = options.callback;
	}

	private next () {

		this.current++;

		// console.log("next increment current", this.current);

		if (this.current > this.total) {
			this.current = 1;
			// console.log("reset current", this.current);
		}

		this.callback(this.current);

	}

	public run () {

		let self = this;

		this.timer = setInterval(() => {

			// console.log("interval", self.interval);

			self.next();

		}, this.interval)
	}

	public break () {

		clearInterval(this.timer);
		this.timer = null;
	}

}
