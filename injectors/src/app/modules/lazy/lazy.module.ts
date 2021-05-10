import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetsModule } from '../widgets/widgets.module';
import { LazyInputComponent } from './lazy-input/lazy-input.component';
import { LazyListComponent } from './lazy-list/lazy-list.component';
import { LazyRoutingModule } from './lazy-routing.module';



@NgModule({
  declarations: [
    LazyInputComponent,
    LazyListComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    WidgetsModule
  ]
})
export class LazyModule { }
