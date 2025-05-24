import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosSelectorComponent } from './ejercicios-selector.component';

describe('EjerciciosSelectorComponent', () => {
  let component: EjerciciosSelectorComponent;
  let fixture: ComponentFixture<EjerciciosSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjerciciosSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
