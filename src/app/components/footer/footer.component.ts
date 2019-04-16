import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public texts: Array<any> = [];
  public anio: number;
  public name: string;
  public ref: any;

  constructor(private db: AngularFireDatabase ) {
    this.ref = db.object('HOME');
  }

  ngOnInit() {
    this.ref.snapshotChanges()
      .subscribe(
        (item: any) => {
          this.name = item.payload.val().NAME;
        }
      )
    this.anio = new Date().getFullYear();
  }

}
