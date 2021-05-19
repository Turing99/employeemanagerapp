import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor( private HttpClient: HttpClient) {}

    public getEmployees(): Observable<Employee[]>{
      return this.HttpClient.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
    }

    public addEmployee(employee: Employee): Observable<Employee>{
      return this.HttpClient.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee>{
      return this.HttpClient.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
    }

    public deleteEmployee(employeeId: number): Observable<void>{
      return this.HttpClient.delete<void>(`${this.apiServerUrl}/employee/delete${employeeId}`);
    }
   }

