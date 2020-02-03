import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUser } from '../models/random-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  static readonly API_URL = 'https://randomuser.me/api/?results=50&nat=br';

  getAll(): Observable<RandomUser[]> {
    const rsp = this.http.get(RandomUserService.API_URL);
    return rsp.pipe(
      map((data: any) => {
        const users = [];
        for (const userData of data.results) {
          users.push(this.createRandomUser(userData));
        }

        users.sort((u1, u2) => u1.nome.localeCompare(u2.nome));
        return users;
      })
    );
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
