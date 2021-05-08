import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { ProviderTypesModule } from './provider-types/provider-types.module';

const routes: Routes = [
  { path: 'deps', component: DependenciesComponent },
  { path: 'types', loadChildren: () => ProviderTypesModule },
  { path: '', redirectTo: '/deps', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
