import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicateService } from 'src/app/services/communicate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nom: string | null = null
  constructor(private router: Router, private cs: CommunicateService) { }
  ngOnInit(): void {
    this.cs.getValue().subscribe(nom => this.nom = nom)
  }
  signOut() {
    localStorage.removeItem('tokens')
    this.cs.sendValue(null)
    this.router.navigateByUrl('/auth')
  }
  signIn() {
    this.router.navigateByUrl('/auth')
  }
}
