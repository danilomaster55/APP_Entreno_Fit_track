import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroTiposEjercicioComponent } from './maestro-tipos-ejercicio.component';

describe('MaestroTiposEjercicioComponent', () => {
  let component: MaestroTiposEjercicioComponent;
  let fixture: ComponentFixture<MaestroTiposEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroTiposEjercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroTiposEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
