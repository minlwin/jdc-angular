import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangeDetaction } from './change-detaction/change-detaction';
import { ArrayValueChild } from './change-detaction/childs/array-value';
import { ObjectValueChild } from './change-detaction/childs/object-value';
import { SimpleStringChild } from './change-detaction/childs/simple-string';
import { ChildrenComponent } from './children/children.component';
import { ContentDemo } from './contents/content-demo';
import { FormInputComponent } from './contents/form-input/form-input.component';
import { ParentComponent } from './children/parent/parent.component';
import { ViewChildComponent } from './children/view-child/view-child.component';
import { ContentChildComponent } from './children/content-child/content-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeDetaction,
    SimpleStringChild,
    ArrayValueChild,
    ObjectValueChild,
    ContentDemo,
    FormInputComponent,
    ChildrenComponent,
    ParentComponent,
    ViewChildComponent,
    ContentChildComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'changes', component: ChangeDetaction },
      { path: 'content', component: ContentDemo },
      { path: 'children', component: ChildrenComponent },
      { path: '', redirectTo: '/changes', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
