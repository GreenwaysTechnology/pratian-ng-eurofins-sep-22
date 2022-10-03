import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { BooksComponent } from './books.component';
import { ElectronicsComponent } from './electronics.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    BooksComponent,
    ElectronicsComponent
  ],
  imports: [
    CommonModule ,AppRoutingModule
  ],
  exports: [
    ProductsComponent,
    BooksComponent,
    ElectronicsComponent
  ]
})
export class ProductsModule { }
