import { Component, OnInit, Input, Output } from '@angular/core';
import { ICustomer } from 'src/app/core/interfaces/icustomer';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  
  @Input() customer:ICustomer;
  @Output() saveCustomerClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveCustomer(){
    this.saveCustomerClick.emit(this.customer);
  }
}
