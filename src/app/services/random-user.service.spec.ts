import { TestBed } from '@angular/core/testing';

import { RandomUserService } from '../services';
import { RandomUser } from '../models/random-user';

describe('RandomUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be fetched', async () => {
    const service: RandomUserService = TestBed.get(RandomUserService);
    const randomUsers = await service.getAll();
    expect(randomUsers.length).toBe(50);
  });

  it('should be created', async () => {
    const service: RandomUserService = TestBed.get(RandomUserService);

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

    const randomUser = new RandomUser(
                                'https://randomuser.me/api/portraits/med/women/66.jpg',
                                'Mrs Jucielen Oliveira',
                                'jucielen.oliveira@example.com',
                                'Avenida da Democracia, 3215',
                                'Resende, Bahia, Brazil',
                                '(68) 7149-2293',
                                new Date('1945-11-03T23:35:11.522Z')
                              );

    expect(service.createRandomUser(userData)).toEqual(randomUser);
  });
});
