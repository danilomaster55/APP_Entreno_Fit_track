import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoDetalleComponent } from './entrenamiento-detalle.component';

describe('EntrenamientoDetalleComponent', () => {
  let component: EntrenamientoDetalleComponent;
  let fixture: ComponentFixture<EntrenamientoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenamientoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenamientoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
