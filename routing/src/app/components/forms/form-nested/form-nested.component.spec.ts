import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNestedComponent } from './form-nested.component';

describe('FormNestedComponent', () => {
  let component: FormNestedComponent;
  let fixture: ComponentFixture<FormNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
