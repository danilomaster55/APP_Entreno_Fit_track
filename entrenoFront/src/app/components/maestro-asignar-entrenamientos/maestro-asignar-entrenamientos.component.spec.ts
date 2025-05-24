import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroAsignarEntrenamientosComponent } from './maestro-asignar-entrenamientos.component';

describe('MaestroAsignarEntrenamientosComponent', () => {
  let component: MaestroAsignarEntrenamientosComponent;
  let fixture: ComponentFixture<MaestroAsignarEntrenamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroAsignarEntrenamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroAsignarEntrenamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
