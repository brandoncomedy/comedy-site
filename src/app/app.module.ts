import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { APP_ROUTES } from './app.states';
// import { routerConfigFn } from './router.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: APP_ROUTES,
      useHash: true,
      otherwise:{state:"home"}
  	}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
