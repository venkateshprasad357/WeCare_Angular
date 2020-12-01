import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachLoginComponent } from './coach-login/coach-login.component';
import { CoachSignupComponent } from './coach-signup/coach-signup.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'coachsignup',component:CoachSignupComponent},
  {path:'coachlogin',component:CoachLoginComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'usersignup',component:UserSignupComponent},
  {path:'' ,redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
