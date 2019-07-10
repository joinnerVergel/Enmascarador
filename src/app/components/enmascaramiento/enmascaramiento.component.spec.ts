import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnmascaramientoComponent } from './enmascaramiento.component';

describe('EnmascaramientoComponent', () => {
  let component: EnmascaramientoComponent;
  let fixture: ComponentFixture<EnmascaramientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnmascaramientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnmascaramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
