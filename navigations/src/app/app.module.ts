import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FromPageComponent } from './hello/from-page/from-page.component';
import { ToPageComponent } from './hello/to-page/to-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FromPageComponent,
    ToPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'hello', component: FromPageComponent },
      { path: 'hello-to', component: ToPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
