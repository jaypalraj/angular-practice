import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/icustomer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers:ICustomer[] = [
    {id:1,firstName:"Jaypal",lastName:"Raj",age:36},
    {id:2,firstName:"Varshita",lastName:"Raj",age:30}
  ];

  getCustomers() : Observable<ICustomer[]>{
    const custs = this.customers;
    return of(JSON.parse(JSON.stringify(custs)));
  }

  getCustomer(customerId:number) : Observable<ICustomer>{
    const cust = this.customers.find(cust => cust.id === customerId);
    return of(JSON.parse(JSON.stringify(cust)));
  }

  addCustomer(customer:ICustomer) : Observable<ICustomer[]>{
    customer.id = this.customers.length + 1;
    this.customers.push(customer);
    return of(JSON.parse(JSON.stringify(this.customers)));
  }

  updateCustomer(customer:ICustomer) : Observable<ICustomer[]>{
    var index = this.customers.findIndex((cust, index, array) => cust.id === customer.id);
    this.customers[index] = customer;

    return of(JSON.parse(JSON.stringify(this.customers)));
  }

}
