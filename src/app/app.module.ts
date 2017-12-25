import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

// routes
import { APP_ROUTING } from 'app/app.routes';

// services
import { BbddService } from './services/bbdd.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobremiComponent,
    HabilidadesComponent,
    EducacionComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BbddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
