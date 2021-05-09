import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { AliasComponent } from './types/alias/alias.component';
import * as Demo from './types/factory/demo';
import { FactoryComponent } from './types/factory/factory.component';
import { MultiComponent } from './types/multi/multi.component';
import { CategoryComponent } from './usage/category/category.component';
import { ID_GEN, ID_GENERATOR } from './usage/model/id-gen';
import { CATEGORY_REPO, CATEGORY_TYPE, PRODUCT_REPO, PRODUCT_TYPE, REPO_FACTORY } from './usage/model/repository';
import { ProductComponent } from './usage/product/product.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    AppComponent,
    DependenciesComponent,
    FactoryComponent,
    AliasComponent,
    MultiComponent,
    UsageComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: 'message', useFactory: Demo.messageFactory },
    { provide: ID_GEN, useFactory: ID_GENERATOR },
    { provide: CATEGORY_TYPE, useValue: 'Category' },
    { provide: PRODUCT_TYPE, useValue: 'Product' },
    { provide: CATEGORY_REPO, useFactory: REPO_FACTORY, deps: [CATEGORY_TYPE, ID_GEN] },
    { provide: PRODUCT_REPO, useFactory: REPO_FACTORY, deps: [PRODUCT_TYPE, ID_GEN] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
