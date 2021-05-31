import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ForbitNameDirective } from './app-commons/forbit-name.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalDialogComponent } from './app-commons/modal-dialog/modal-dialog.component';
import { IconEditComponent } from './app-commons/icon-edit/icon-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ForbitNameDirective,
    ModalDialogComponent,
    IconEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
