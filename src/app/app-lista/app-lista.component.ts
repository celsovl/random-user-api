import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUser } from '../models';
import { RandomUserService } from '../services';
import { Observable } from 'rxjs';

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

  ngOnInit() {
    this.randomUserService
      .getAll()
      .subscribe(users => this.randomUsers = users);
  }

  onDetalhes(randomUser: RandomUser) {
    window.localStorage.setItem('randomUser', JSON.stringify(randomUser));
    this.router.navigate(['/detalhes']);
  }
}
