import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarArticuloComponent } from './agregar-articulo.component';

describe('AgregarArticuloComponent', () => {
  let component: AgregarArticuloComponent;
  let fixture: ComponentFixture<AgregarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('When allUsers() is called', () => {
    
  //   it('all should be fine', () => {
  //     const users = [{}, 2, 3];
  //     spyOn(component.inyectarArticulo, 'allUsers').and.returnValue(of({ users: users }));
  //   }

  //   )
  // });
});
