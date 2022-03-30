import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDeLosDetallesComponent } from './datos-de-los-detalles.component';

describe('DatosDeLosDetallesComponent', () => {
  let component: DatosDeLosDetallesComponent;
  let fixture: ComponentFixture<DatosDeLosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDeLosDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDeLosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
