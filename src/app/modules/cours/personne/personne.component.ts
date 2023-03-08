import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personne: Personne = { adresses: [] };
  personnes: Personne[] = []
  constructor(private ps: PersonneService) {

  }
  ngOnInit(): void {
    this.ps.getPersonnes().subscribe({
      next: value => {
        
        this.personnes = value;
      },
      error: (erreur) => {
        alert("Problème de récupération")
      }
    }
    )
  }
  ajouterPersonne() {
    this.ps.addPersonne(this.personne).subscribe({
      next: value => {
        this.personnes.push(value);
        this.personne ={ adresses: [] };
      },
      error: (erreur) => {
        alert("Problème d'insertion")
      }
    })
  }
  supprimerPersonne(num:number = 0){
    this.ps.removePersonne(num).subscribe( {
      next: () => {
        //alert("Suppression effectuée avec succès")
        let indice = this.personnes.findIndex(elt => elt.num == num)
        this.personnes.splice(indice, 1);
      },
      error: (erreur) => {
        alert("Problème de suppression")
      }
    })
  }
}
