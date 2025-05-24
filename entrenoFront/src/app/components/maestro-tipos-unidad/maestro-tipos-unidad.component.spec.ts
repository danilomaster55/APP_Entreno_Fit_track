import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroTiposUnidadComponent } from './maestro-tipos-unidad.component';

describe('MaestroTiposUnidadComponent', () => {
  let component: MaestroTiposUnidadComponent;
  let fixture: ComponentFixture<MaestroTiposUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroTiposUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroTiposUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
