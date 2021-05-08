import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderTypesRoutingModule } from './provider-types-routing.module';
import { AliasComponent } from './alias/alias.component';
import { FactoryComponent } from './factory/factory.component';
import { MultiComponent } from './multi/multi.component';


@NgModule({
  declarations: [
    AliasComponent,
    FactoryComponent,
    MultiComponent
  ],
  imports: [
    CommonModule,
    ProviderTypesRoutingModule
  ]
})
export class ProviderTypesModule { }
