import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroIntensidadComponent } from './maestro-intensidad.component';

describe('MaestroIntensidadComponent', () => {
  let component: MaestroIntensidadComponent;
  let fixture: ComponentFixture<MaestroIntensidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroIntensidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroIntensidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
