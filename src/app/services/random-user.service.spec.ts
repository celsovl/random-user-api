import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RandomUserService } from '../services';
import { RandomUser } from '../models/random-user';

const userData = {
  gender: 'female',
  name: {
    title: 'Mrs',
    first: 'Jucielen',
    last: 'Oliveira'
  },
  location: {
    street: {
      number: 3215,
      name: 'Avenida da Democracia'
    },
    city: 'Resende',
    state: 'Bahia',
    country: 'Brazil',
    postcode: 69011,
    coordinates: {
      latitude: '29.6629',
      longitude: '90.9470'
    },
    timezone: {
      offset: '-9:00',
      description: 'Alaska'
    }
  },
  email: 'jucielen.oliveira@example.com',
  dob: {
    date: '1945-11-03T23:35:11.522Z',
    age: 75
  },
  phone: '(68) 7149-2293',
  cell: '(99) 7354-1713',
  picture: {
    large: 'https://randomuser.me/api/portraits/women/66.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/66.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/66.jpg'
  },
};


describe('RandomUserService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be fetched', done => {
    const service: RandomUserService = TestBed.get(RandomUserService);
    const observable = service.getAll();
    observable.subscribe(randomUsers => {
      expect(randomUsers.length).toBe(3);
      done();
    });

    const users = [];
    for (let i = 0; i < 3; i++) {
      users.push(userData);
    }

    httpMock.expectOne(RandomUserService.API_URL).flush({ results: users });
  });

  it('should be created', async () => {
    const service: RandomUserService = TestBed.get(RandomUserService);

    const randomUser = new RandomUser(
                                'https://randomuser.me/api/portraits/med/women/66.jpg',
                                'Jucielen Oliveira',
                                'jucielen.oliveira@example.com',
                                'Avenida da Democracia, 3215',
                                'Resende, Bahia, Brazil',
                                '(68) 7149-2293',
                                new Date('1945-11-03T23:35:11.522Z')
                              );

    expect(service.createRandomUser(userData)).toEqual(randomUser);
  });
});
