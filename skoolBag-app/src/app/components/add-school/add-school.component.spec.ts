import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { BrowserModule, By } from "@angular/platform-browser";

import { AddSchoolComponent } from "./add-school.component";
import { School } from "src/app/models/school";
import { SchoolService } from "src/app/services/school.service";
import { AppComponent } from "src/app/app.component";
import { environment } from "src/environments/environment";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

describe("AddSchoolComponent", () => {
  let component: AddSchoolComponent;
  let fixture: ComponentFixture<AddSchoolComponent>;

  const school: School = {
    name: "ABC",
    studentCount: 50,
    address: {
      street: "Lane ABC",
      suburb: "Suburb ABC",
      state: "State ABC",
      postcode: "0000",
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      declarations: [AddSchoolComponent, AppComponent],
      providers: [SchoolService, FormBuilder],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  xit("should call addSchool method when click on Save button", () => {
    component.schoolForm.controls["name"].setValue(school.name);
    component.schoolForm.controls["studentCount"].setValue(school.studentCount);
    component.schoolForm.get("address.street").setValue(school.address.street);
    component.schoolForm.get("address.suburb").setValue(school.address.suburb);
    component.schoolForm.get("address.state").setValue(school.address.state);
    component.schoolForm
      .get("address.postcode")
      .setValue(school.address.postcode);

    fixture.detectChanges();

    let spy = spyOn(component, "addSchool").and.callThrough();

    let btn = fixture.debugElement.query(By.css("button"));
    btn.nativeElement.click();
    //btn.triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it("should be invalid when empty", () => {
    expect(component.schoolForm.invalid).toBeTruthy();
  });

  it("should give required error for name", () => {
    component.schoolForm.controls["name"].setValue("");

    expect(
      component.schoolForm.controls["name"].hasError("required")
    ).toBeTruthy();
  });
});
