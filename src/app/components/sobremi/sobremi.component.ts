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

  public listProgramming: any;
  public listTools: any;
  public listMethodology: any;

  public sectionMeTitle: string;
  public sectionMeParagraph: string;
  public sectionMeTextSmall: string;

  constructor( private _bbdd: BbddService) {

  }

  ngOnInit() {

    this.texts = [ ...this._bbdd.getTexts() ];

    this.sectionLiveTitle = this.texts[0].ABOUTME.LIVETITLE;
    this.sectionLiveParagraph = this.texts[0].ABOUTME.LIVE[0].paragraph;
    this.listProgramming = this.texts[0].ABOUTME.LIVE[0].programming;
    this.listTools = this.texts[0].ABOUTME.LIVE[0].tools;
    this.listMethodology = this.texts[0].ABOUTME.LIVE[0].methodology;

    this.sectionMeTitle = this.texts[0].ABOUTME.METITLE;
    this.sectionMeParagraph = this.texts[0].ABOUTME.ME.paragraphs;
    this.sectionMeTextSmall = this.texts[0].ABOUTME.ME.textSmall;

  }

}
