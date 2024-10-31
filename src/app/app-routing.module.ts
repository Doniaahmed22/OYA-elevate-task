import { NavbarComponent } from './Component/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './Component/all-products/all-products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

const routes: Routes = [

  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "home", component: HomeComponent, title: "Home" },
  // { path: "products", component: AllProductsComponent, title: "Products" }

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, title: "Home" },
  { path: "products", component: AllProductsComponent, title: "Products" },
  { path: 'product/:id', component: ProductDetailsComponent } // Route with product ID

  // { path: "**", component: NotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
