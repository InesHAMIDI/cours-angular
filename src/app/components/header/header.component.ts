import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { CommunicateService } from 'src/app/services/communicate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'cours-angular';
  message: string = "Bienvenue dans " + this.title + " !";
  nom: string | null = null
  constructor(private cs: CommunicateService) {
    // if (localStorage.getItem('user') != null ){
    //   const user: User = JSON.parse(localStorage.getItem('user') as string)
    //   if (user != null) {
    //     this.nom = user.username ?? null
    //   }
    // }
  }
  ngOnInit(): void {
    this.cs.getValue().subscribe(nom => {
      this.nom = nom
    })
  }


}