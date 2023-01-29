import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationExampleComponent } from './animation-example.component';

describe('AnimationExampleComponent', () => {
  let component: AnimationExampleComponent;
  let fixture: ComponentFixture<AnimationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
