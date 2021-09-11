import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ProductComponent,
    IndexComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }], 
  bootstrap: [AppComponent],
})
export class AppModule { }
