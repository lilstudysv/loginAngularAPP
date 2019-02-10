import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';

import { AuthGuard} from 'src/app/guards/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent}, 
  {path:'home',component:HomePageComponent, canActivate: [AuthGuard]},
  {path:'**',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
