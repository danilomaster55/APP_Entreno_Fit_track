import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroUsuariosComponent } from './maestro-usuarios.component';

describe('MaestroUsuariosComponent', () => {
  let component: MaestroUsuariosComponent;
  let fixture: ComponentFixture<MaestroUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
