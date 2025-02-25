import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploapiComponent } from './ejemploapi.component';

describe('EjemploapiComponent', () => {
  let component: EjemploapiComponent;
  let fixture: ComponentFixture<EjemploapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
