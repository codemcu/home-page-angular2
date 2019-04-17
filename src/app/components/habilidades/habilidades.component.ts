import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public texts: Array<any> = [];
  public sectionContent: Array<any> = [];
  public ref: any;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.ref = this.db.object('SKYLLS');
    this.ref.snapshotChanges()
      .subscribe(
        (item: any) => {
          this.sectionContent = item.payload.val();
        }
      )
  }

}
