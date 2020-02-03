import { Component, OnInit } from '@angular/core';
import { RandomUser } from '../models';

@Component({
  selector: 'app-app-detalhes',
  templateUrl: './app-detalhes.component.html',
  styleUrls: ['./app-detalhes.component.css']
})
export class AppDetalhesComponent implements OnInit {

  constructor() { }

  randomUser: RandomUser;

  ngOnInit() {
    this.randomUser = JSON.parse(window.localStorage.getItem('randomUser'));
  }

}
