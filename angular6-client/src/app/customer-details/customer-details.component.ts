import { Component, OnInit, Input } from "@angular/core";
import { CustomersListComponent } from "../customers-list/customers-list.component";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
@Component({
  selector: "customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})
export class CustomerDetailsComponent implements OnInit {
  @Input()
  customer: Customer;
  constructor(
    private customerService: CustomerService,
    private listComponent: CustomersListComponent
  ) {}

  ngOnInit() {}
}
