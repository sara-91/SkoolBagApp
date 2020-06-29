import { Component, OnInit } from "@angular/core";
import { School } from "src/app/models/school";
import { Address } from "src/app/models/address";
import { SchoolService } from "src/app/services/school.service";

@Component({
  selector: "app-school-list",
  templateUrl: "./school-list.component.html",
  styleUrls: ["./school-list.component.css"],
})
export class SchoolListComponent implements OnInit {
  searchText: string;
  schoolList = new Array<School>();
  isLoading = false;

  constructor(private schoolService: SchoolService) {}

  ngOnInit() {
    this.isLoading = true;
    this.schoolService.getSchools().subscribe((data) => {
      this.schoolList = [
        ...data.map((e) => {
          this.isLoading = false;
          return e.payload.doc.data();
        }),
      ];
    });
  }

  GetAddress(address: Address) {
    return `${address.street}, ${address.suburb}, ${address.state} ${address.postcode}`;
  }
}
