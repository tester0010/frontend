import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {AgeFilter, Employee, SortOrder} from '../../model/employee';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {EmployeeAgeFilterComponent} from '../employeeFilter/employee-age-filter.component';
import {AgeFilterData} from '../../model/age-filter-data';
import {EmployeeSalaryFilterComponent} from '../employeeFilter/employee-salary-filter.component';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  dataSource: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['name', 'salary', 'age', 'email', 'phone'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.retrieveAllEmployees();
  }

  retrieveAllEmployees(): void {
    this.employeeService.retrieveEmployees()
      .subscribe(list => this.dataSource.data = list);
  }

  openAgeFilterDialog(): void {
    const dialogRef = this.dialog.open(EmployeeAgeFilterComponent, {
      data: {age: 0, ageFilter: AgeFilter.EQUAL}
    });

    dialogRef.afterClosed()
      .pipe(filter(dialogOutput => dialogOutput))
      .subscribe((ageFilterData: AgeFilterData) => {
        this.employeeService.retrieveEmployeesByAge(ageFilterData.age, ageFilterData.ageFilter)
          .subscribe(list => this.dataSource.data = list);
      });
  }

  openSalaryFilterDialog(): void {
    const dialogRef = this.dialog.open(EmployeeSalaryFilterComponent, {
      data: SortOrder.ASC
    });

    dialogRef.afterClosed()
      .pipe(filter(dialogOutput => dialogOutput))
      .subscribe((sortOrder: SortOrder) => {
        this.employeeService.retrieveEmployeesSortedBySalary(sortOrder)
          .subscribe(list => this.dataSource.data = list);
      });
  }
}
