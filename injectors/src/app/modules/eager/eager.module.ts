import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetsModule } from '../widgets/widgets.module';
import { EagerInputComponent } from './eager-input/eager-input.component';
import { EagerListComponent } from './eager-list/eager-list.component';
import { EagerRoutingModule } from './eager-routing.module';



@NgModule({
  declarations: [
    EagerListComponent,
    EagerInputComponent
  ],
  imports: [
    CommonModule,
    EagerRoutingModule,
    WidgetsModule
  ]
})
export class EagerModule { }
