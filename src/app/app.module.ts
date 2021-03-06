import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { Http, HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { APP_ROUTES } from './app.states';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DatesComponent } from './components/dates/dates.component';
// import { routerConfigFn } from './router.config';


import { AppConfig } from "./app.config";
import { DataService } from "./services/data.service";
import { CarouselService } from "./services/carousel.service";
import { FooterComponent } from './components/footer/footer.component';

export function startupServiceFactory(config: AppConfig) : Function {

    return function () {

        return config.load()
    }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    DatesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: APP_ROUTES,
      useHash: false,
      otherwise:{state:"home"}
  	}),
  ],
  providers: [
  AppConfig,
  DataService,
  CarouselService,
  {
	provide: APP_INITIALIZER,
	useFactory: startupServiceFactory,
	deps: [AppConfig],
	multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
