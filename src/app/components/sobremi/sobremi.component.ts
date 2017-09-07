import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  public sectionLive:string;
  public sectionLike:string;  
  public sectionLiveParagraph1:string;
  public sectionLiveParagraph2:string;
  public experience:any[];

  constructor() {
    this.sectionLive = 'Vivo en Madrid';
    this.sectionLive = 'Sobre mí';
    this.sectionLiveParagraph1 = 'Soy front-end web developer y cuento con, aproximadamente, 10 años de experiencia. Desde hace algún tiempo estoy estudiando Desarrollo de Aplicaciones Híbridas - SPA´s con AngularJS, IonicFramework. También tengo experiencia en UX y el paquete AdobeSuite para diseño web (Photoshop, Illustrator, AfterEffects)';
    this.experience = [
      { 
        "title": 'Lenguajes / Frameworks',
        "list": [
          "Programación Java, Typescript",
          "Desarrollo web: Javascript (AngularJS, JQuery, NodeJS, NVM, NPM, Gulp, Grunt, Modernizr, BabelJS, Bower, ES6), HTML5, CSS3 (Bootstrap 3, Responsive web design, Media Queries), SASS, LESS, PHP, SQL",          
        ]
      },
      { 
        "title": 'Herramientas de desarrollo',
        "list": [
          "VCS: Git (Sourcetree)",
          "Sistemas de seguimiento de errores: JIRA, Confluence, Jenkins (Integración continua)"          
        ]
      },
      { 
        "title": 'Metodologías',
        "list": [
          "VCS: Git (Sourcetree)"          
        ]
      }
    ];
    this.sectionLiveParagraph2 = 'Me considero un ‘friki’ de las tecnologías, me gusta el aprendizaje continuo, los nuevos retos y me entusiasma aprender algo nuevo cada día. Puedo aportar algo de experiencia y buen rollo en los equipos de trabajo';
  }

  ngOnInit() {
  }

}
