import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { BooksComponent } from './products/books.component';
import { ElectronicsComponent } from './products/electronics.component';
import { ProductsComponent } from './products/products.component';
import { UserdetailsComponent } from './users/userdetails.component';
import { UserlistComponent } from './users/userlist.component';

//route configuration
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'users', component: UserlistComponent
  },
  {
    path: 'users/details/:id', component: UserdetailsComponent
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'electronics', component: ElectronicsComponent }

    ]
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
