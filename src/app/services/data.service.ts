import { Injectable } from '@angular/core';

import { AppConfig } from "../app.config";

@Injectable()
export class DataService {

	data = {};

	constructor(private config:AppConfig) { 

		let carouselImages = this.config.getConfig("carousel").images;

		this.data["carousel"] = carouselImages;

		let dates = this.config.getConfig("dates");

		this.data["dates"] = dates;

		let monthNames = this.config.getConfig("monthNames")

		this.data["monthNames"] = monthNames;

	}


	public getData (what) {

		return this.data[what];
	}

}
