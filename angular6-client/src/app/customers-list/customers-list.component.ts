import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: "customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"]
})
export class CustomersListComponent implements OnInit {
  customers: Observable<Customer[]>;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }
  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
}
