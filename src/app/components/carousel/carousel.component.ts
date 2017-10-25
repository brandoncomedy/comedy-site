import { Component, OnInit } from '@angular/core';


import { DataService } from "../../services/data.service";
import { CarouselService } from "../../services/carousel.service";

import * as $ from 'jquery';

// import utility from "../../../assets/js/utility.js";

declare var utility;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

	images = [];
	num_images = 0;
	carousel_width = "";
	image_percent = "";
	image_width = 0;

	running = false;

	constructor(private data:DataService, private carousel:CarouselService) { 

		let self = this;

		let img = this.data.getData("carousel");

		this.images = img.slice(0,3);
		this.num_images = this.images.length;

		this.carousel_width = this.num_images*100 + "%";
		this.image_percent = 99/this.num_images + "%";
		
		console.log("num images", this.num_images);

		setTimeout(() => {

			self.setup();

		}, 300);

		// $(window).resize(() => {

		// 	self.setup();
		// });


		carousel.config({total:this.num_images, interval:5000, callback:(current) => {

			console.log("callback", current);
			$(".imageContainer").each((index, element) => {

				let left = utility.truncate($(element).position().left - self.image_width, 0);

				$(element).stop().animate({left:left + "px"}, {
					duration:2000,
					complete:function () {
						console.log("left", current, $("#img" + index).css("left"));
						$("#imgCont" + (current-1)).css({left:(self.num_images-1)*self.image_width + "px"});
					}
				});


			});


		}});

		carousel.run();

	}

	ngOnInit() {

		
	}

	setup () {

		$("#carouselContainer").css({width:this.carousel_width});
		$(".imageContainer").css({width:this.image_percent})

		this.image_width = $("#carouselFrame").width();

		$(".imageContainer").each((index, element) => {

			$(element).css({left:index*this.image_width + "px"});
		})
			
	}

	run() {

		if (!this.running) {
			this.running = true;
			console.log("run");
			this.carousel.run();
		}
	}

	break () {

		console.log("break");
		this.carousel.break();
		this.running = false;
	}

}
