import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/component/employeeList/employee.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmployeeAgeFilterComponent} from './employee/component/employeeFilter/employee-age-filter.component';
import {FormsModule} from '@angular/forms';
import {EmployeeSalaryFilterComponent} from './employee/component/employeeFilter/employee-salary-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeAgeFilterComponent,
    EmployeeSalaryFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeeAgeFilterComponent,
    EmployeeSalaryFilterComponent
  ]
})
export class AppModule { }
