import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public sectionContent:any[];

  constructor() {
    this.sectionContent = [
      {
        "subtitles": "{ Maquetación responsive }",
        "img": "assets/img/habilidades_1.png",
        "list": [
          "HTML5 (5 años)",
          "CSS3 (7 años)",
          "SASS (2 años)",
          "Bootstrap3 (3 años)",
          "Responsive design (3 años)",
          ">Wireframes y Prototipado (6 meses)"
        ]
      },
      {
        "subtitles": "{ Software gráfico }",
        "img": "assets/img/habilidades_2.png",
        "list": [
          "Illustrator CS6 (6 años)",
          "Photoshop CS6 (6 años)",
          "Premiere CS6 (1 año)",
          "After Effects CS6 (1 año)",
          "Cinema 4D (1 año)",
          "Flash CS6 (3 años)"
        ]
      },
      {
        "subtitles": "{ Code Scripting }",
        "img": "assets/img/habilidades_3.png",
        "list": [
          "Javascript (3 años)",
          "JQuery (1.5 año)",
          "AngularJs (8 meses)",
          "Angular (6 meses)",
          "Node.js (1 año)",
          "GIT (1 año)",
          "Typescript (1 año)"
        ]
      }
    ]
  }

  ngOnInit() {
  }

}
