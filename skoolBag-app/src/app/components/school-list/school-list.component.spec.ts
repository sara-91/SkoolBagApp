import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { BrowserModule } from "@angular/platform-browser";

import { SchoolListComponent } from "./school-list.component";
import { School } from "src/app/models/school";
import { Address } from "src/app/models/address";
import { SchoolService } from "src/app/services/school.service";
import { AppComponent } from "src/app/app.component";
import { environment } from "src/environments/environment";

describe("SchoolListComponent", () => {
  let component: SchoolListComponent;
  let fixture: ComponentFixture<SchoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      declarations: [SchoolListComponent, AppComponent],
      providers: [SchoolService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
