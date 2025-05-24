import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroNivelesDificultadComponent } from './maestro-niveles-dificultad.component';

describe('MaestroNivelesDificultadComponent', () => {
  let component: MaestroNivelesDificultadComponent;
  let fixture: ComponentFixture<MaestroNivelesDificultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroNivelesDificultadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroNivelesDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
