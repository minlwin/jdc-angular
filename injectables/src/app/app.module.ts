import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Counter } from './services/counter';
import { MessageService } from './services/messages';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'hello', component: HelloComponent },
      { path: '', redirectTo: '/hello', pathMatch: 'full' }
    ])
  ],
  providers: [
    Counter, MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
