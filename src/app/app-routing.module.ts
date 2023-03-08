import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PersonneDetailsComponent } from './components/personne-details/personne-details.component';
import { PersonneReactiveDetailsComponent } from './components/personne-reactive-details/personne-reactive-details.component';
import { PersonneReactiveComponent } from './components/personne-reactive/personne-reactive.component';
import { PersonneComponent } from './components/personne/personne.component';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import { VoitureComponent } from './modules/vehicule/voiture/voiture.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "personne", component: PersonneComponent },
  { path: "personne-reactive", component: PersonneReactiveComponent },
  { path: "personne-details/:num", component: PersonneDetailsComponent },
  { path: "personne-reactive-details/:num", component: PersonneReactiveDetailsComponent },
  { path: "observable", component: ObservableComponent },

  { 
    path: 'vehicule', 
    loadChildren: () => import('./modules/vehicule/vehicule.module')
                        .then(m => m.VehiculeModule)
                        
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
