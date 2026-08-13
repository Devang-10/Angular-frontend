import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCardComponent } from './employee/employee-card/employee-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
