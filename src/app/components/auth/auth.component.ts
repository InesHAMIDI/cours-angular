import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { CommunicateService } from 'src/app/services/communicate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user: User = { grantType: "password"}
  erreur: string | null = null
  constructor(
    private us: UserService, 
    private router: Router,
    private cs: CommunicateService
    ) { }

  connexion() {
    this.us.checkUser(this.user).subscribe({
      next: result => {
        localStorage.setItem("tokens", JSON.stringify(result))
        this.cs.sendValue(this.us.getUsernameFromToken(result.accessToken!)) 
        this.router.navigateByUrl("/")
      },
      error: () => this.erreur = "Identifiants incorrects"
    })
  }
}
