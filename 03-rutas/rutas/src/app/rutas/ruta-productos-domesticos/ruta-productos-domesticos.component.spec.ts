import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosDomesticosComponent } from './ruta-productos-domesticos.component';

describe('RutaProductosDomesticosComponent', () => {
  let component: RutaProductosDomesticosComponent;
  let fixture: ComponentFixture<RutaProductosDomesticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosDomesticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosDomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
