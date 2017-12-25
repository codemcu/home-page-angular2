import {Injectable} from '@angular/core';

@Injectable()
export class BbddService {

  texts: Array<any> = [
    {
      HOME: {
        NAME: 'Mauricio Correa',
        TITLE: 'Front-end developer'
      },
      ABOUTME: {
        LIVETITLE: 'Vivo en Madrid',
        LIVE: [
          {
            paragraph: 'Soy front-end web developer y cuento con, aproximadamente, 10 años de experiencia. Aquí puedes leer todas las tecnologías con las que he trabajado. También tengo experiencia en UX y con el paquete AdobeSuite para diseño web (Photoshop, Illustrator, AfterEffects)',
            programming: {
              title: 'Lenguajes / Frameworks',
              list: [
                'Programación Java, Typescript',
                'Desarrollo web: Javascript (AngularJS, JQuery, NodeJS, NVM, NPM, Gulp, Grunt, Modernizr, BabelJS, Bower, ES6), HTML5, CSS3 (Bootstrap 3, Responsive web design, Media Queries), SASS, LESS, PHP, SQL'
              ]
            },
            tools: {
              title: 'Herramientas de desarrollo',
              list: [
                'VCS: Git (Sourcetree)',
                'Sistemas de seguimiento de errores: JIRA, Confluence, Jenkins (Integración continua)',
                'IDE´s: Eclipse, Visual Studio Code, Webstorm, SublimeText'
              ]
            },
            methodology: {
              title: 'Metodologías',
              list: [
                'Agile, Scrum'
              ]
            }
          }
        ],
        METITLE: 'Sobre mí',
        ME: {
          paragraphs: [
            'Me considero un ‘friki’ de las tecnologías, lo puedes comprobar con mi cuenta de Github, donde aparte de algún que otro proyecto, estoy actualmente trabajando en una DEMO de la típica "Lista de tareas" hecha en Angular2, Typescript y Boostrap.',
            'Me gusta el aprendizaje continuo, los nuevos retos y me entusiasma aprender algo nuevo cada día. Puedo aportar algo de experiencia y buen rollo en los equipos de trabajo'
          ],
          textSmall: '* En la app "Lista de Tareas - Angular2", he utilizado Boostrap 3 para la maquetación, por lo que se puede ver funcionando en móvil y tablet. Typescript como lenguaje de desarrollo y LocalStorage para la persistencia de datos. El backend quiero hacerlo con nodeJS y mongoJS'
        }
      },
      SKYLLS: [
        {
          subtitles: '{ Maquetación responsive }',
          img: 'assets/img/habilidades_1.png',
          list: [
            'HTML5 (5 años)',
            'CSS3 (7 años)',
            'SASS (2 años)',
            'Bootstrap3 (3 años)',
            'Responsive design (3 años)',
            '>Wireframes y Prototipado (6 meses)'
          ]
        },
        {
          subtitles: '{ Software gráfico }',
          img: 'assets/img/habilidades_2.png',
          list: [
            'Illustrator CS6 (6 años)',
            'Photoshop CS6 (6 años)',
            'Premiere CS6 (1 año)',
            'After Effects CS6 (1 año)',
            'Cinema 4D (1 año)',
            'Flash CS6 (3 años)'
          ]
        },
        {
          subtitles: '{ Code Scripting }',
          img: 'assets/img/habilidades_3.png',
          list: [
            'Javascript (3 años)',
            'JQuery (1.5 año)',
            'AngularJs (8 meses)',
            'Angular (6 meses)',
            'Node.js (1 año)',
            'GIT (1 año)',
            'Typescript (1 año)'
          ]
        }
      ],
      EDUCATION: [
        {
          subtitles: '{ Desarrollo front-end con frameworks Javascript }',
          class: 'fa-beer',
          description: 'Universitat Oberta de Catalunya',
        },
        {
          subtitles: '{ Desarrollo en HTML5, CSS y Javascript de WebApps, incluyendo móviles FirefoxOS }',
          class: 'fa-coffee',
          description: 'Universidad Politécnica de Madrid',
        },
        {
          subtitles: '{ Desarrollo de servicios en la nube con HTML5, Javascript y Node.js }',
          class: 'fa-flask',
          description: 'Universidad Politécnica de Madrid',
        },
        {
          subtitles: '{ Desarrollo de aplicaciones web }',
          class: 'fa-glass',
          description: 'Centre d´Estudis Politécnics - UCOC',
        }
      ],
      PORTFOLIO: {
        TITLE: 'Portafolio',
        IMG: 'assets/img/img-estudios.jpg',
        TEXTBUTTON: 'Ver portafolio'
      },
      CONTACT: {
        TITLESECTION: 'Contacto',
        IMGSOCIALNETWORKS: 'assets/img/img-footer.png',
        SOCIALNETWORKS: [
          {
            CHANNEL: '680686932',
            CLASS: 'fa-phone',
            LINK: 'tel:34680686932'
          },
          {
            CHANNEL: 'github',
            CLASS: 'fa-github',
            LINK: 'https://github.com/codemcu'
          },
          {
            CHANNEL: 'twitter',
            CLASS: 'fa-twitter',
            LINK: 'https://twitter.com/codemcu'
          },
          {
            CHANNEL: 'email',
            CLASS: 'fa-google',
            LINK: 'mailto:frontend.mcu@gmail.com'
          },
          {
            CHANNEL: 'linkedin',
            CLASS: 'fa-linkedin',
            LINK: 'https://es.linkedin.com/in/mauriciocorreaurizar'
          }
        ],
        CONSTRUCT: {
          WEB: 'Web contruida con:',
          IMGS: [
            {logo: 'assets/img/logo-HTML5.png', alt: 'logo HTML5', title: 'HTML5'},
            {logo: 'assets/img/logo-javascript.png', alt: 'logo Javascript', title: 'Javascript'},
            {logo: 'assets/img/logo-sass.png', alt: 'logo SASS', title: 'Sass'},
            {logo: 'assets/img/logo-angular.png', alt: 'logo Angular', title: 'Angular'},
            {logo: 'assets/img/logo-bootstrap.png', alt: 'logo Bootstrap', title: 'Bootstrap'}
          ]
        },
        CV: '¿Quieres saber más?, descarga mi curriculum completo',
        CR: 'Copyright @ 2017 | Mauricio Correa',
        IMGPERFIL: 'assets/img/img-perfil.jpg'
      }
    }
  ];

  constructor() {
    console.log('service!!!');
  }

  getTexts (): any {
    return this.texts;
  }
}
