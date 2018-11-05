import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AngularMaterialModule } from './angularMaterial/angularMaterial.module';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductModule, RouterModule.forRoot([]), CoreModule, AngularMaterialModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production,
    }),
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
