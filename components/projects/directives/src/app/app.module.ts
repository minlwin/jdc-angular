import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppCardComponent } from './commons/app-card/app-card.component';
import { AppForDirective } from './commons/app-for.directive';
import { HelloDirective } from './commons/hello.directive';
import { HightLightDirective } from './commons/hightlignt.directive';
import { AttributesComponent } from './views/attributes/attributes.component';
import { HelloComponent } from './views/hello/hello.component';
import { NgForDemoComponent } from './views/ng-for-demo/ng-for-demo.component';
import { NgIfDemoComponent } from './views/ng-if-demo/ng-if-demo.component';
import { NgSwitchDemoComponent } from './views/ng-switch-demo/ng-switch-demo.component';
import { StructureComponent } from './views/structure/structure.component';
import { TrackByComponent } from './views/track-by/track-by.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloDirective,
    HelloComponent,
    AttributesComponent,
    HightLightDirective,
    StructureComponent,
    AppForDirective,
    NgIfDemoComponent,
    AppCardComponent,
    NgSwitchDemoComponent,
    NgForDemoComponent,
    TrackByComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'hello', component: HelloComponent },
      { path: 'attr', component: AttributesComponent },
      { path: 'struct', component: StructureComponent },
      { path: 'ng-if', component: NgIfDemoComponent },
      { path: 'ng-switch', component: NgSwitchDemoComponent },
      { path: 'ng-for', component: NgForDemoComponent },
      { path: 'track', component: TrackByComponent },
      { path: '', redirectTo: '/hello', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
