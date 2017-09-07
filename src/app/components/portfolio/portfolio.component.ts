import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public sectionTitle:string;
  public img:string;
  public textButton:string;

  constructor() {
    this.sectionTitle = 'Portafolio';
    this.img = 'assets/img/img-estudios.jpg';
    this.textButton = 'Ver portafolio';
  }

  ngOnInit() {
  }

}
