import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisponibilidadComponent } from './add-disponibilidad.component';

describe('AddDisponibilidadComponent', () => {
  let component: AddDisponibilidadComponent;
  let fixture: ComponentFixture<AddDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDisponibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
