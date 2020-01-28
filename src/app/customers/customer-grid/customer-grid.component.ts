import { Component, OnInit, Input, Output, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { ICustomer } from 'src/app/core/interfaces/icustomer';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'customer-grid',
  templateUrl: './customer-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerGridComponent implements OnInit {

  @Input() customers:ICustomer[];
  @Output() editCustomerClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editCustomerClicked(customer){
    this.editCustomerClick.emit(customer);
  }
}
