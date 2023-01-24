import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatedComponent } from './form-validated.component';

describe('FormValidatedComponent', () => {
  let component: FormValidatedComponent;
  let fixture: ComponentFixture<FormValidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
