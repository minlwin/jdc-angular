import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { AliasComponent } from './types/alias/alias.component';
import { FactoryComponent } from './types/factory/factory.component';
import { MultiComponent } from './types/multi/multi.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  { path: 'deps', component: DependenciesComponent },
  {
    path: 'types', children: [
      { path: 'factory', component: FactoryComponent },
      { path: 'alias', component: AliasComponent },
      { path: 'multi', component: MultiComponent },
      { path: '', redirectTo: '/types/factory', pathMatch: 'full' }
    ]
  },
  { path: 'usage', component: UsageComponent },
  { path: '', redirectTo: '/deps', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
