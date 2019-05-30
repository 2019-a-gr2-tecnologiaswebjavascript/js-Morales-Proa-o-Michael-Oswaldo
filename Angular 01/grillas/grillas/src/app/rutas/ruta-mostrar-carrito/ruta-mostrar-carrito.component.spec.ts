import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMostrarCarritoComponent } from './ruta-mostrar-carrito.component';

describe('RutaMostrarCarritoComponent', () => {
  let component: RutaMostrarCarritoComponent;
  let fixture: ComponentFixture<RutaMostrarCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMostrarCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMostrarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
