import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Adresse } from 'src/app/interfaces/adresse';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';
import { prenomValidator } from 'src/app/validators/prenom.validator';

@Component({
  selector: 'app-personne-reactive',
  templateUrl: './personne-reactive.component.html',
  styleUrls: ['./personne-reactive.component.css']
})
export class PersonneReactiveComponent implements OnInit {
  personnes: Personne[] = []
  personneForm = this.fb.group({
    nom: ["", { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z]{1,19}$/)] }],
    prenom: ["", { nonNullable: true, validators: [Validators.required, prenomValidator] }],
    adresses: this.fb.array<FormGroup>([
    ])
  })

  /*
this.fb.group({
      rue: [""],
      ville: [""],
      codePostal: [""]
    })
  */
  constructor(private ps: PersonneService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.ps.getPersonnes().subscribe(value => {
      this.personnes = value
    })
  }
  get nom() {
    return this.personneForm.controls.nom
  }
  get prenom() {
    return this.personneForm.controls.prenom
  }
  get adresses() {
    return this.personneForm.controls.adresses
  }
  ajouterPersonne() {
    console.log(this.personneForm.value);

    this.ps.addPersonne(this.personneForm.value as Personne).subscribe({
      next: value => {
        this.personnes.push(value);
        this.personneForm.reset()

      },
      error: (erreur) => {
        alert("Problème d'insertion")
      }
    })

    // console.log(this.personneForm.value)
    // console.log(this.personneForm.controls.nom.value);
    // console.log(this.personneForm.get('nom')?.value);


  }

  ajouterAdresse() {
    this.adresses.push(this.fb.group({
      rue: this.fb.control(""),
      ville: this.fb.control(""),
      codePostal: this.fb.control("")
    }))
  }
}

