import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerInputComponent } from './eager-input/eager-input.component';
import { EagerListComponent } from './eager-list/eager-list.component';

const routes: Routes = [
  { path: 'input', component: EagerInputComponent },
  { path: 'list', component: EagerListComponent },
  { path: '', redirectTo: '/eager/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerRoutingModule { }
