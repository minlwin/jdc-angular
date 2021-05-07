import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureService } from '../services/my-searvice';
import { WidgetsModule } from '../widgets/widgets.module';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { RootPageComponent } from './root-page/root-page.component';

@NgModule({
  declarations: [
    FeatureComponent,
    FeaturePageComponent,
    RootPageComponent,
    OtherPageComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    WidgetsModule
  ],
  providers: [
    FeatureService
  ]
})
export class FeatureModule { }
