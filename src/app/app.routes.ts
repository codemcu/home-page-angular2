import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/components/home/home.component';
import { SobremiComponent } from 'app/components/sobremi/sobremi.component';
import { HabilidadesComponent } from 'app/components/habilidades/habilidades.component';
import { EducacionComponent } from 'app/components/educacion/educacion.component';
import { PortfolioComponent } from 'app/components/portfolio/portfolio.component';
import { ContactoComponent } from 'app/components/contacto/contacto.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
