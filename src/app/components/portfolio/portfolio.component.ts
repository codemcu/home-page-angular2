import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  texts: Array<any> = [];

  public sectionTitle: string;
  public img: string;
  public textButton: string;
  public ref: string;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {

    const ref = this.db.object('PORTFOLIO');
    ref.snapshotChanges()
      .subscribe(
        (item: any) => {
          // this.ref = item.payload.val();
          this.sectionTitle = item.payload.val().TITLE;
          this.img = item.payload.val().IMG;
          this.textButton = item.payload.val().TEXTBUTTON;
        }
      )

  }

}
