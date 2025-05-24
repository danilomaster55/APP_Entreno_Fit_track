import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioMiniCardComponent } from './ejercicio-mini-card.component';

describe('EjercicioMiniCardComponent', () => {
  let component: EjercicioMiniCardComponent;
  let fixture: ComponentFixture<EjercicioMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioMiniCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
