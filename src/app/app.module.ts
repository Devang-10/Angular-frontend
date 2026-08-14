import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCardComponent } from './employee/employee-card/employee-card.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
