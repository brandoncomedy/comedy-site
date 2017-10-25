import { Injectable } from '@angular/core';

import { AppConfig } from "../app.config";

@Injectable()
export class DataService {

	images = [];
	dates = [];

	constructor(private config:AppConfig) { 

		var img = this.config.getConfig("images");

		for (var i in img) {

			this.images.push(img[i]);
		}

		this.dates = this.config.getConfig("dates");

		// for (var i in d) {

		// 	this.dates.push(d[i]);
		// }
	}


	public getImages () {

		return this.images
	}

	public getDates () {

		return this.dates;
	}

}
