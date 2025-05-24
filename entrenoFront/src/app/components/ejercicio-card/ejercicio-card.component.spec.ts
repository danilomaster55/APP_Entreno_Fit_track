import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioCardComponent } from './ejercicio-card.component';

describe('EjercicioCardComponent', () => {
  let component: EjercicioCardComponent;
  let fixture: ComponentFixture<EjercicioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
