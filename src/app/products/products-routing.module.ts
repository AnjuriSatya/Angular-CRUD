import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   loadChildren: () => import('../products/products.module').then((m) => m.ProductsModule),
  //   children: [
      
  //     {
  //       path: 'products',
  //       component: ProductsComponent,
  //     }
  //   ] 
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
