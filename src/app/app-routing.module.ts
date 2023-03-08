import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { 
    path: 'cours', 
    loadChildren: () => import('./modules/cours/cours.module')
                        .then(m => m.CoursModule)                     
  },
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
