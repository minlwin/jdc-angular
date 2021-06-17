import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossFieldsComponent } from './cross-fields/cross-fields.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'form-group', component: FormGroupComponent },
  { path: 'cross', component: CrossFieldsComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'builder', component: FormBuilderComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
