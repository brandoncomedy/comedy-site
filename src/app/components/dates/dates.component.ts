import { Component, OnInit } from '@angular/core';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

	dates = [];
	monthNames = [];
	date;

	constructor(private data:DataService) { 

		
	}

	ngOnInit() {


		this.dates = this.data.getData("dates");
		this.monthNames = this.data.getData("monthNames");

		for (var j = 0; j < this.dates.length; j++) {

			let date = new Date(this.dates[j].date);

			this.dates[j].dateObj = date;

			this.dates[j].dateString = this.printDate(date);


			let k = 0;
			let subObj = this.dates[j].tickets.subject;
			let subject = "";

			for (var i in subObj) {

				subject += subObj[i]

				if (k == 0) {
					subject += this.dates[j].talent;
				}
				else if (k == 1) {
					subject += this.dates[j].dateString;
				}
				else if (k == 2) {
					subject += this.dates[j].venue;
				}

				k++;
			}

			this.dates[j].tickets.subjectString = encodeURI(subject);

			this.dates[j].tickets.bodyString = encodeURI(this.dates[j].tickets.body);

		}


	}


	printDate(date) {

		return this.getMonth(date) + " " + date.getDate() + ", " + this.resolveYear(date.getYear()) + " " + this.resolveHours(date.getHours()) + ":" + this.resolveMinutes(date.getMinutes()) + " " + (date.getHours() > 12 ? "PM" : "AM")

	}

	getMonth (date) {

		return this.monthNames[date.getMonth()];
	}

	resolveYear (year) {

		return 1900 + year;
	}

	resolveMinutes (minutes) {

		return minutes < 10 ? "0" + minutes : "" + minutes;
	}

	resolveHours (hours) {

		console.log("hours", hours);

		return hours > 12 ? hours - 12 : hours;

	}

}
