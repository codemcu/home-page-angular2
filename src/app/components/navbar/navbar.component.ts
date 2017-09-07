import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menu:any[];
  public brand:string

  constructor() {
    this.menu = [
      {item: 'Home', link: 'home'},
      {item: 'Sobre mí', link: 'sobremi'},
      {item: 'Habilidades', link: 'habilidades'},
      {item: 'Educación', link: 'educacion'},
      {item: 'Portfolio', link: 'portfolio'},
      {item: 'Contacto', link: 'contacto'}
    ]

    this.getMenu();
    this.brand = 'Mauricio Correa'
  }

  ngOnInit() {
  }

  public getMenu () {
    return this.menu;
  }

}
