import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'form-group', component: FormGroupComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
