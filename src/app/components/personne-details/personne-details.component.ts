import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {
  num: number | null = null;
  personne: Personne = {}
  constructor(
    private route: ActivatedRoute, 
    private ps: PersonneService,
    private router: Router
    ) {
      console.log('PersonneDetailsComponent constructor');
      
     }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.num = Number(res.get('num'))
      this.ps.getPersonne(this.num).subscribe(res => {
        this.personne = res

      })

    })
  }
  enregistrer(){
    this.ps.updatePersonne(this.personne).subscribe({
      next: () =>  {
        alert("Modification enregistrée dans la base de données")
        this.router.navigateByUrl("/personne");
      },
      error: erreur => console.log("Problème de modification :", erreur)
    })
  }
 }
