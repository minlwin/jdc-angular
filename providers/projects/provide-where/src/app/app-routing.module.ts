import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageComponent } from './app-page/app-page.component';
import { BothPageComponent } from './both-page/both-page.component';

const routes: Routes = [
  { path: 'app-page', component: AppPageComponent },
  { path: 'both', component: BothPageComponent },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: '', redirectTo: '/app-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
