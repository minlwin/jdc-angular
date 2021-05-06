import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { IncreDecreComponent } from './incre-decre/incre-decre.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  { path: 'inc-dec', component: IncreDecreComponent },
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'enter-leave', component: EnterLeaveComponent },
  { path: '', redirectTo: '/open-close', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
