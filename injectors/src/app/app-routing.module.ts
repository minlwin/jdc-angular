import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerModule } from './modules/eager/eager.module';
import { HelloComponent } from './views/hello/hello.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'eager', loadChildren: () => EagerModule },
  { path: 'lazy', loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule) },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
