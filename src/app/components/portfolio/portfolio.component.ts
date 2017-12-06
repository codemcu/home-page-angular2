import { Component, OnInit } from '@angular/core';
import {BbddService} from '../../services/bbdd.service';

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

  constructor( private _bbdd: BbddService) {
  }

  ngOnInit() {
    this.texts = [ ...this._bbdd.getTexts() ];
    this.sectionTitle = this.texts[0].PORTFOLIO.TITLE;
    this.img = this.texts[0].PORTFOLIO.IMG;
    this.textButton = this.texts[0].PORTFOLIO.TEXTBUTTON;
  }

}
