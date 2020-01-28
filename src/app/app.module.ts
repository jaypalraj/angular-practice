import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerGridComponent } from './customers/customer-grid/customer-grid.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerGridComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
