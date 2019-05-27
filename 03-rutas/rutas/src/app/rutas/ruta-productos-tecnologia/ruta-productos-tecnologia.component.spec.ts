import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosTecnologiaComponent } from './ruta-productos-tecnologia.component';

describe('RutaProductosTecnologiaComponent', () => {
  let component: RutaProductosTecnologiaComponent;
  let fixture: ComponentFixture<RutaProductosTecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosTecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
