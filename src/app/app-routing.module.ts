import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

import { AuthGuard} from 'src/app/guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomePageComponent, canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'tasks/:id',component:TaskComponent},
  {path:'newTask',component:NewTaskComponent},
  {path:'**',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }