import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { ProviderTypesModule } from './provider-types/provider-types.module';

@NgModule({
  declarations: [
    AppComponent,
    DependenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProviderTypesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
