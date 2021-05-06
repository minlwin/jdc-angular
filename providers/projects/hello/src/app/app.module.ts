import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MessageRepository } from './resources/message.resources';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'input', component: InputComponent },
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: '/input', pathMatch: 'full' }
    ])
  ],
  providers: [
    MessageRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
