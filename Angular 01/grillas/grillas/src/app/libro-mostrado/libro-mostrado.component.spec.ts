import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroMostradoComponent } from './libro-mostrado.component';

describe('LibroMostradoComponent', () => {
  let component: LibroMostradoComponent;
  let fixture: ComponentFixture<LibroMostradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroMostradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroMostradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
