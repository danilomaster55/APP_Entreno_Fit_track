import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoMiniCardComponent } from './entrenamiento-mini-card.component';

describe('EntrenamientoMiniCardComponent', () => {
  let component: EntrenamientoMiniCardComponent;
  let fixture: ComponentFixture<EntrenamientoMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenamientoMiniCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenamientoMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
