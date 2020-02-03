import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUser } from '../models';
import { RandomUserService } from '../services';

@Component({
  selector: 'app-app-lista',
  templateUrl: './app-lista.component.html',
  styleUrls: ['./app-lista.component.css']
})
export class AppListaComponent implements OnInit {

  constructor(
    private router: Router,
    private randomUserService: RandomUserService
  ) {}

  randomUsers: RandomUser[];

  async ngOnInit() {
    this.randomUsers = await this.randomUserService.getAll();
  }

  onDetalhes(randomUser: RandomUser) {
    window.localStorage.setItem('randomUser', JSON.stringify(randomUser));
    this.router.navigate(['/detalhes']);
  }
}
