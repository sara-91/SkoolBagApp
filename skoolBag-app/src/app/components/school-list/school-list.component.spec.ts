import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { BrowserModule } from "@angular/platform-browser";

import { SchoolListComponent } from "./school-list.component";
import { School } from "src/app/models/school";
import { SchoolService } from "src/app/services/school.service";
import { AppComponent } from "src/app/app.component";
import { environment } from "src/environments/environment";
import { SearchFilterPipe } from "src/app/pipes/search.filter.pipe";

describe("SchoolListComponent", () => {
  let component: SchoolListComponent;
  let fixture: ComponentFixture<SchoolListComponent>;

  let pipe: SearchFilterPipe;
  const searchText = "AB";
  const schoolList: Array<School> = [
    {
      name: "ABC",
      studentCount: 50,
      address: {
        street: "Lane ABC",
        suburb: "Suburb ABC",
        state: "State ABC",
        postcode: "0000",
      },
    },
    {
      name: "XYZ",
      studentCount: 100,
      address: {
        street: "Lane XYZ",
        suburb: "Suburb XYZ",
        state: "State XYZ",
        postcode: "1111",
      },
    },
  ];

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
    component.schoolList = [];
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render loading text", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("span").textContent).toContain(
      "Please wait....."
    );
  });

  it("should search school", () => {
    const pipe = new SearchFilterPipe();
    const schools = pipe.transform(schoolList, searchText);
    expect(schools[0]).toEqual(schoolList[0]);
  });

  xit("should have one row", () => {
    component.schoolList = schoolList;
    let trs = fixture.nativeElement.querySelectorAll("tr");
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(1);
  });
});
