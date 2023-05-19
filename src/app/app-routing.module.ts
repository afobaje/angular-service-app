import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { WorkComponent } from './component/work/work.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'find-work',
    component:WorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
