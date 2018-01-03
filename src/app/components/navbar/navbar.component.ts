import { Component, OnInit } from '@angular/core';
import { BbddService } from '../../services/bbdd.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menu: any[];


  constructor( private _service: BbddService) { }

  ngOnInit() {
    this.menu = this._service.getTexts();
  }

  removeClass() {
    const clas = document.getElementsByClassName('navbar-collapse');
    clas[0].classList.remove('in');
  }
}
