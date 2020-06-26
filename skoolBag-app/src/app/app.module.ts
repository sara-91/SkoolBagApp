import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { SchoolListComponent } from "./components/school-list/school-list.component";
import { AddSchoolComponent } from "./components/add-school/add-school.component";

@NgModule({
  declarations: [AppComponent, SchoolListComponent, AddSchoolComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
