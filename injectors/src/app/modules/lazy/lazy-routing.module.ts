import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyInputComponent } from './lazy-input/lazy-input.component';
import { LazyListComponent } from './lazy-list/lazy-list.component';

const routes: Routes = [
  { path: 'input', component: LazyInputComponent },
  { path: 'list', component: LazyListComponent },
  { path: '', redirectTo: '/lazy/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
