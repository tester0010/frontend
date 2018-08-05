import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './component/employeeList/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {FormsModule} from '@angular/forms';
import {EmployeeAgeFilterComponent} from './component/employeeFilter/employee-age-filter.component';
import {EmployeeSalaryFilterComponent} from './component/employeeFilter/employee-salary-filter.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent}
];

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAgeFilterComponent,
    EmployeeSalaryFilterComponent
  ],
  imports: [
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
    FormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    EmployeeAgeFilterComponent,
    EmployeeSalaryFilterComponent
  ],
  exports: [RouterModule]
})
export class EmployeeModule { }
