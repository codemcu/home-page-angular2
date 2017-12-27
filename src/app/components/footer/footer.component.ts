import { Component, OnInit } from '@angular/core';
import { BbddService } from '../../services/bbdd.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public texts: Array<any> = [];
  public anio: number;
  public name: string;

  constructor( private _bbdd: BbddService ) { }

  ngOnInit() {
    this.texts = [ ...this._bbdd.getTexts() ];
    this.name = this.texts[0].HOME.NAME;

    const anio = new Date().getFullYear();
    this.anio = anio;
  }

}
