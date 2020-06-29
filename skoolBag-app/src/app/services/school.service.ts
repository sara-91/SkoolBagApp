import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { School } from "../models/school";
import { Observable } from "rxjs";

@Injectable()
export class SchoolService {
  constructor(private firestore: AngularFirestore) {}

  addSchool(newSchool: School) {
    return this.firestore.collection("schools").add(newSchool);
  }

  getSchools(): Observable<any> {
    return this.firestore.collection("schools").snapshotChanges();
  }
}
