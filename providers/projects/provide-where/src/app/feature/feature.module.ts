import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetsModule } from '../widgets/widgets.module';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { RootPageComponent } from './root-page/root-page.component';



@NgModule({
  declarations: [
    FeatureComponent,
    FeaturePageComponent,
    RootPageComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    WidgetsModule
  ]
})
export class FeatureModule { }
