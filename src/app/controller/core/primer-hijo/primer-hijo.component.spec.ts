import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerHijoComponent } from './primer-hijo.component';

describe('PrimerHijoComponent', () => {
  let component: PrimerHijoComponent;
  let fixture: ComponentFixture<PrimerHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
