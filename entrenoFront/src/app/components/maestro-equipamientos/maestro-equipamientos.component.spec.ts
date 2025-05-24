import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroEquipamientosComponent } from './maestro-equipamientos.component';

describe('MaestroEquipamientosComponent', () => {
  let component: MaestroEquipamientosComponent;
  let fixture: ComponentFixture<MaestroEquipamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroEquipamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroEquipamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
