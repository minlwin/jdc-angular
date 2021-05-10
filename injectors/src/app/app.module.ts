import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsModule } from './modules/widgets/widgets.module';
import { HelloComponent } from './views/hello/hello.component';
import { EagerModule } from './modules/eager/eager.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    EagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
