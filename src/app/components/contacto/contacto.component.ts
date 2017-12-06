import { Component, OnInit } from '@angular/core';
import {BbddService} from '../../services/bbdd.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  texts: Array<any> = [];

  public sectionTitle: string;
  public sectionImg: string;
  public construct: string;
  public cv: string;
  public cr: string;
  public imgPerfil: string;
  public imgLogos: Array<any> = [];
  public socialNetworks: Array<any> = [];

  constructor( private _bbdd: BbddService) { }

  ngOnInit() {

    this.texts = [ ...this._bbdd.getTexts() ];
    this.sectionTitle = this.texts[0].CONTACT.TITLESECTION;
    this.sectionImg = this.texts[0].CONTACT.IMGSOCIALNETWORKS;
    this.imgLogos = this.texts[0].CONTACT.CONSTRUCT.IMGS;
    this.construct = this.texts[0].CONTACT.CONSTRUCT.WEB;
    this.cv = this.texts[0].CONTACT.CV;
    this.cr = this.texts[0].CONTACT.CR;
    this.imgPerfil = this.texts[0].CONTACT.IMGPERFIL;
    this.socialNetworks = this.texts[0].CONTACT.SOCIALNETWORKS;
  }

}
