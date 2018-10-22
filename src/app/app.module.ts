import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { ProductRoutes } from './product/product.routing';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ProductModule,SharedModule,ProductRoutes,  RouterModule.forRoot([]),CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
