import { Component, OnInit } from '@angular/core';
import { BbddService } from '../../services/bbdd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public texts: Array<any> = [];
  public name: string;
  public jobTitle: string;

  constructor( private _bbdd: BbddService) { }

  ngOnInit() {
    this.texts = [ ...this._bbdd.getTexts() ];
    this.name = this.texts[0].HOME.NAME;
    this.jobTitle = this.texts[0].HOME.TITLE;
  }

}
