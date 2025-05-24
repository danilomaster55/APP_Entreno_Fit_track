import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroGruposMuscularesComponent } from './maestro-grupos-musculares.component';

describe('MaestroGruposMuscularesComponent', () => {
  let component: MaestroGruposMuscularesComponent;
  let fixture: ComponentFixture<MaestroGruposMuscularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroGruposMuscularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroGruposMuscularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
