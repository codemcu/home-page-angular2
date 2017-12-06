import { Component, OnInit } from '@angular/core';
import {BbddService} from '../../services/bbdd.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  texts: Array<any> = [];

  public sectionLiveTitle: string;
  public sectionLiveParagraph: string;
  public sectionMeTitle: string;
  public sectionMeParagraph: string;

  constructor( private _bbdd: BbddService) {

  }

  ngOnInit() {

    this.texts = [ ...this._bbdd.getTexts() ];
    console.log(this.texts[0]);

    this.sectionLiveTitle = this.texts[0].ABOUTME.LIVETITLE;
    this.sectionLiveParagraph = this.texts[0].ABOUTME.LIVE;
    this.sectionMeTitle = this.texts[0].ABOUTME.METITLE;
    this.sectionMeParagraph = this.texts[0].ABOUTME.ME;

  }

}
