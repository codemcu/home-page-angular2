import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public sectionTitle:string;

  constructor() {
    this.sectionTitle = 'Contacto';
  }

  ngOnInit() {
  }

}
