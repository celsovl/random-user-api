import { Injectable } from '@angular/core';
import { RandomUser } from '../models/random-user';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor() { }

  static readonly API_URL = 'https://randomuser.me/api/?results=50&nat=br';

  async getAll(): Promise<RandomUser[]> {
    const response = await fetch(RandomUserService.API_URL);
    const data = await response.json();

    const users = [];
    for (const userData of data.results) {
      users.push(this.createRandomUser(userData));
    }

    users.sort((u1, u2) => u1.nome.localeCompare(u2.nome));

    return users;
  }

  createRandomUser(userData: any): RandomUser {
    const primeiroNome = userData.name.first;
    const ultimoNome = userData.name.last;
    const nome = `${primeiroNome} ${ultimoNome}`;

    const email = userData.email;

    const location = userData.location;
    const endereco = `${location.street.name}, ${location.street.number}`;
    const cidade = `${location.city}, ${location.state}, ${location.country}`;

    const fotoUrl = userData.picture.medium;
    const telefone = userData.phone;
    const nascimento = new Date(userData.dob.date);

    return new RandomUser(
      fotoUrl,
      nome,
      email,
      endereco,
      cidade,
      telefone,
      nascimento);
  }
}
