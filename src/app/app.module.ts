import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProxyComponent } from './components/proxy/proxy.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProxyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
