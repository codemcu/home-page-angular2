import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public texts: Array<any> = [];
  public name: string;
  public jobTitle: string;
  public ref: any;

  constructor( private db: AngularFireDatabase) {
    this.ref = db.object('HOME');
  }

  ngOnInit() {
    this.ref.snapshotChanges()
      .subscribe(
        item => {
          this.name = item.payload.val().NAME;
          this.jobTitle = item.payload.val().TITLE;
        }
      )
  }

}
