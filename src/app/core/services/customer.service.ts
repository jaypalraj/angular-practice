import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers:ICustomer[] = [
    {id:1,firstName:"Jaypal",lastName:"Raj",age:36},
    {id:2,firstName:"Varshita",lastName:"Raj",age:30}
  ];

  getCustomers(){
    return this.customers;
  }

  getCustomer(customerId:number){
    return this.customers.find(cust => cust.id === customerId);
  }

  addCustomer(customer:ICustomer){
    customer.id = this.customers.length + 1;
    this.customers.push(customer);
    return this.customers;
  }

  updateCustomer(customer:ICustomer){
    var index = this.customers.findIndex((cust, index, array) => cust.id === customer.id);
    this.customers[index] = customer;

    return true;
  }

}
