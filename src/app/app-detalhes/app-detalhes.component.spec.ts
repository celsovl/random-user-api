import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetalhesComponent } from './app-detalhes.component';

describe('AppDetalhesComponent', () => {
  let component: AppDetalhesComponent;
  let fixture: ComponentFixture<AppDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetalhesComponent ]
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
