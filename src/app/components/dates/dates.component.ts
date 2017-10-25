import { Component, OnInit } from '@angular/core';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

	dates = [];

	constructor(private data:DataService) { 

		
	}

	ngOnInit() {


		this.dates = this.data.getDates();
	}

}
