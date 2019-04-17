import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

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
  public ref: any;

  constructor( private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.ref = this.db.object('CONTACT');
    this.ref.snapshotChanges()
      .subscribe(
        (item: any) => {
          this.sectionTitle = item.payload.val().TITLESECTION;
          this.sectionImg = item.payload.val().IMGSOCIALNETWORKS;
          this.imgLogos = item.payload.val().CONSTRUCT.IMGS;
          this.construct = item.payload.val().CONSTRUCT.WEB;
          this.cv = item.payload.val().CV;
          this.cr = item.payload.val().CR;
          this.imgPerfil = item.payload.val().IMGPERFIL;
          this.socialNetworks = item.payload.val().SOCIALNETWORKS;
        }
      )
  }
}
