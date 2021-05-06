import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { IncreDecreComponent } from './incre-decre/incre-decre.component';


@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    EnterLeaveComponent,
    IncreDecreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
