import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetalhesComponent } from './app-detalhes.component';
import { RandomUser } from '../models';
import { RandomUserService } from '../services';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const randomUser = new RandomUser('fotoUrl', 'nome', 'email', 'endereco', 'cidade', 'telefone', new Date());

describe('AppDetalhesComponent', () => {
  let component: AppDetalhesComponent;
  let fixture: ComponentFixture<AppDetalhesComponent>;
  let spy = jasmine.createSpyObj('RandomUserService', ['getAll']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetalhesComponent ],
      imports: [HttpClientTestingModule],
      providers: [{ provide: RandomUserService, useValue: spy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
