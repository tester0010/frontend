import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AgeFilter, Employee, SortOrder} from '../model/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  public retrieveEmployeesSortedBySalary(sortOrder: SortOrder): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/employees/bySalary/' + sortOrder);
  }

  public retrieveEmployeesByAge(age: number, filter: AgeFilter): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/employees/byAge/' + age + '/' + filter);
  }

  retrieveEmployees() {
    return this.http.get<Employee[]>('http://localhost:8080/employees');
  }
}
