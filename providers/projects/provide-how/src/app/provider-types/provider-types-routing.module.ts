import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliasComponent } from './alias/alias.component';
import { FactoryComponent } from './factory/factory.component';
import { MultiComponent } from './multi/multi.component';

const routes: Routes = [
  { path: 'alias', component: AliasComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'multi', component: MultiComponent },
  { path: '', redirectTo: '/types/alias', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderTypesRoutingModule { }
