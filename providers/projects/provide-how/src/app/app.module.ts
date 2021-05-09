import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { AliasComponent } from './types/alias/alias.component';
import * as Demo from './types/factory/demo';
import { FactoryComponent } from './types/factory/factory.component';
import { MultiComponent } from './types/multi/multi.component';

@NgModule({
  declarations: [
    AppComponent,
    DependenciesComponent,
    FactoryComponent,
    AliasComponent,
    MultiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: 'message', useFactory: Demo.messageFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
