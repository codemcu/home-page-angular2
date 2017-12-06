import { Component, OnInit } from '@angular/core';
import {BbddService} from '../../services/bbdd.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public texts: Array<any> = [];
  public sectionContent: Array<any> = [];

  constructor( private _bbdd: BbddService) {
  }

  ngOnInit() {
    this.texts = [ ...this._bbdd.getTexts() ];
    this.sectionContent = [ ...this.texts[0].SKYLLS ];
  }

}
