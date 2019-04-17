import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public sectionTitle:string;
  public sectionContent:any[];
  public ref: any;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.sectionTitle = "Educación";
    this.ref = this.db.object('EDUCATION');
    this.ref.snapshotChanges()
      .subscribe(
        (item: any) => {
          this.sectionContent = item.payload.val();
        }
      )
  }

}
