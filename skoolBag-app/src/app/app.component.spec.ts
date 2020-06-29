import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SchoolService } from "./services/school.service";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddSchoolComponent } from "src/app/components/add-school/add-school.component";
import { SchoolListComponent } from "src/app/components/school-list/school-list.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddSchoolComponent, SchoolListComponent, AppComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [FormBuilder, SchoolService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'skoolBag-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("skoolBag-app");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".container span h1").textContent).toContain(
      "School Details"
    );
  });
});
