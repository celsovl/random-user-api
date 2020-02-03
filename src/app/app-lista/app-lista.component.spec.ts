import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListaComponent } from './app-lista.component';

describe('AppListaComponent', () => {
  let component: AppListaComponent;
  let fixture: ComponentFixture<AppListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
