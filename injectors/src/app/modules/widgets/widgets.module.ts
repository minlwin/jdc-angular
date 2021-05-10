import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageListComponent } from './message-list/message-list.component';



@NgModule({
  declarations: [
    MessageInputComponent,
    MessageListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageInputComponent,
    MessageListComponent
  ]
})
export class WidgetsModule { }
