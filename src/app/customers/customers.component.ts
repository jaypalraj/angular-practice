import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../core/services/customer.service';
import { ICustomer } from '../core/interfaces/icustomer';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:ICustomer[];
  customer:ICustomer = {
    id:0,firstName:'',lastName:'',age:0
  };

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  onEditCustomerClicked(value){
    this.customer = value;
  }

  onSaveCustomerClicked(value){
    if(value.id === 0)
    {
      this.customerService.addCustomer(value);
    }
    else
    {
      this.customerService.updateCustomer(value);
    }
  }
}
