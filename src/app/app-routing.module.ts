import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {APP_BASE_HREF} from '@angular/common';  
import { IndexComponent } from './index/index.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {path:"",component:IndexComponent},

  {path:"product",component:ProductComponent},
  {path:"productdetail",component:ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]  


})
export class AppRoutingModule { }
