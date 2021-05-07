import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppPageComponent } from './app-page/app-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsModule } from './widgets/widgets.module';
import { BothPageComponent } from './both-page/both-page.component';
import { PageChildComponent } from './app-page/page-child/page-child.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPageComponent,
    BothPageComponent,
    PageChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
