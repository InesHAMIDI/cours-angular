import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-reactive-details',
  templateUrl: './personne-reactive-details.component.html',
  styleUrls: ['./personne-reactive-details.component.css']
})
export class PersonneReactiveDetailsComponent {
  num: number | null = null;
  personneForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private ps: PersonneService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.personneForm = this.fb.group({
      num: [0],
      nom: [''],
      prenom: [''],
      adresses: this.fb.array<FormGroup>([])
    })

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.num = Number(res.get('num'))
      this.ps.getPersonne(this.num).subscribe(res => {
        this.personneForm.patchValue(res)
      })

    })
  }
  enregistrer() {
    this.ps.updatePersonne(this.personneForm.value as Personne).subscribe({
      next: () => {
        alert("Modification enregistrée dans la base de données")
        this.router.navigateByUrl("/cours/personne-reactive");
      },
      error: erreur => console.log("Problème de modification :", erreur)
    })
  }
}
