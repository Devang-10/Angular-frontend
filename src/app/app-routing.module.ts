import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { authGuard } from './auth.guard';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },

  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [authGuard],
  },

  {path: 'employee/:id', component: EmployeeDetailsComponent},

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },

  { path: 'about', component: AboutComponent },

  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
