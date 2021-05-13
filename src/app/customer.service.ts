import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl: string;

  constructor(private http: HttpClient) {
    this.customerUrl = 'http://localhost:8080/api/customer';
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customerUrl}`);
  }

  public getCustomer(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.customerUrl}/${customerId}`);
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.customerUrl}`, customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.customerUrl}`, customer);
  }

  public deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.customerUrl}/${customerId}`);
  }
}
