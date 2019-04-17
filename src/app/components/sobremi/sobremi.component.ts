import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  texts: Array<any> = [];

  public sectionLiveTitle: string;
  public sectionLiveParagraph: string;

  public listProgramming: any;
  public listTools: any;
  public listMethodology: any;

  public sectionMeTitle: string;
  public sectionMeParagraph: string;
  public sectionMeTextSmall: string;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {

    const ref = this.db.object('ABOUTME');
    ref.snapshotChanges()
      .subscribe(
        (item: any) => {
          this.sectionLiveTitle = item.payload.val().LIVETITLE;
          this.sectionLiveParagraph = item.payload.val().LIVE[0].paragraph;
          this.listProgramming = item.payload.val().LIVE[0].programming;
          this.listTools = item.payload.val().LIVE[0].tools;
          this.listMethodology = item.payload.val().LIVE[0].methodology;

          this.sectionMeTitle = item.payload.val().METITLE;
          this.sectionMeParagraph = item.payload.val().ME.paragraphs;
          this.sectionMeTextSmall = item.payload.val().ME.textSmall;
        }
      )
  }
}
