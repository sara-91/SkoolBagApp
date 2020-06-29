import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { School } from "../models/school";
import { Observable } from "rxjs";

@Injectable()
export class SchoolService {
  constructor(private firestore: AngularFirestore) {}

  addSchool(newSchool: School) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("schools")
        .add(newSchool)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  getSchools(): Observable<any> {
    return this.firestore.collection("schools").snapshotChanges();
  }
}
