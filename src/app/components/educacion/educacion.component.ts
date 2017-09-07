import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public sectionTitle:string;
  public sectionContent:any[];

  constructor() {

    this.sectionTitle = "Educación";
    this.sectionContent = [
      {
        "subtitles": "{ Desarrollo front-end con frameworks Javascript }",
        "class": "fa-beer",
        "description": "Universitat Oberta de Catalunya",
      },
      {
        "subtitles": "{ Desarrollo en HTML5, CSS y Javascript de WebApps, incluyendo móviles FirefoxOS }",
        "class": "fa-coffee",
        "description": "Universidad Politécnica de Madrid",
      },
      {
        "subtitles": "{ Desarrollo de servicios en la nube con HTML5, Javascript y Node.js }",
        "class": "fa-flask",
        "description": "Universidad Politécnica de Madrid",
      },
      {
        "subtitles": "{ Desarrollo de aplicaciones web }",
        "class": "fa-glass",
        "description": "Centre d´Estudis Politécnics - UCOC",
      }
    ]
  }

  ngOnInit() {
  }

}
