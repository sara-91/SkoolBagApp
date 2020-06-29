import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { SchoolListComponent } from "./components/school-list/school-list.component";
import { AddSchoolComponent } from "./components/add-school/add-school.component";
import { SchoolService } from "./services/school.service";
import { SearchFilterPipe } from "./pipes/search.filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    AddSchoolComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent],
})
export class AppModule {}
