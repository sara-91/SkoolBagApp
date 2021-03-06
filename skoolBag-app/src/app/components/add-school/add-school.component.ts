import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { School } from "src/app/models/school";
import { SchoolService } from "src/app/services/school.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-school",
  templateUrl: "./add-school.component.html",
  styleUrls: ["./add-school.component.css"],
})
export class AddSchoolComponent implements OnInit {
  schoolForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private schoolService: SchoolService,
    private toastr: ToastrService
  ) {
    this.schoolForm = this.fb.group({
      name: ["", [Validators.required]],
      address: this.fb.group({
        street: ["", [Validators.required]],
        suburb: ["", [Validators.required]],
        state: ["", [Validators.required]],
        postcode: ["", [Validators.required]],
      }),
      studentCount: ["", [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  get controls() {
    return this.schoolForm.controls;
  }

  addSchool() {
    let newSchool: School = {
      name: this.schoolForm.value.name,
      studentCount: this.schoolForm.value.studentCount,
      address: {
        street: this.schoolForm.value.address.street,
        suburb: this.schoolForm.value.address.suburb,
        state: this.schoolForm.value.address.state,
        postcode: this.schoolForm.value.address.postcode,
      },
    };
    this.schoolService
      .addSchool(newSchool)
      .then((res) => {
        if (res.collection.length === 1) {
          console.log(res);
          this.reset();
          this.showSuccess();
        }
      })
      .catch((err) => {
        this.showError();
      });
  }

  reset() {
    this.schoolForm.reset();
  }

  showSuccess() {
    this.toastr.success("School saved", "Success");
  }

  showError() {
    this.toastr.error("Error occurred", "Error");
  }
}
