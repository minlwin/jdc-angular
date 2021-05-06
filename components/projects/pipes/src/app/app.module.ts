import { registerLocaleData } from '@angular/common';
import localeMy from '@angular/common/locales/my';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserNamePipe } from './user-name.pipe';

registerLocaleData(localeMy)

@NgModule({
  declarations: [
    AppComponent,
    UserNamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
