import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';
import { InterpolationsComponent } from './interpolations/interpolations.component';
import { PropertiesComponent } from './properties/properties.component';
import { UserWidget } from './properties/user-widget/user-widget';
import { StylesComponent } from './styles/styles.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { MyInputComponent } from './two-way/my-input/my-input.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationsComponent,
    PropertiesComponent,
    UserWidget,
    AttributesComponent,
    ClassesComponent,
    StylesComponent,
    EventsComponent,
    TwoWayComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'twoway', component: TwoWayComponent },
      { path: 'events', component: EventsComponent },
      { path: 'styles', component: StylesComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'attr', component: AttributesComponent },
      { path: 'inter', component: InterpolationsComponent },
      { path: 'props', component: PropertiesComponent },
      { path: '', redirectTo: '/inter', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
