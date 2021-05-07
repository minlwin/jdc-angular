import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { FeatureComponent } from './feature.component';
import { RootPageComponent } from './root-page/root-page.component';

const routes: Routes = [
  { path: 'root', component: RootPageComponent },
  { path: 'page', component: FeaturePageComponent },
  { path: '', component: FeatureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [

  ]
})
export class FeatureRoutingModule { }
