import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { };
  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define("angular-portlet-blog-detail", appElement);
  }
}

