import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { PagenotfoundComponent } from './pagenotfound.component';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    UsersModule,
    ProductsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PagenotfoundComponent
  ]
})
export class AppModule { }
