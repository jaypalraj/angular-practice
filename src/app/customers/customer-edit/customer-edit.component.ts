import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ICustomer } from 'src/app/core/interfaces/icustomer';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'customer-edit',
  templateUrl: './customer-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerEditComponent implements OnInit {
  
  @Input() customer:ICustomer;
  @Output() saveCustomerClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNewCustomerClick(){
    this.customer = {id:0,firstName:'',age:0} as ICustomer;
  }

  saveCustomer(){
    this.saveCustomerClick.emit(this.customer);
  }
}
