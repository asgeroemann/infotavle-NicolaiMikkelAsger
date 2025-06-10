import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaeringsmaalComponent } from './laeringsmaal.component';

describe('LaeringsmaalComponent', () => {
  let component: LaeringsmaalComponent;
  let fixture: ComponentFixture<LaeringsmaalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaeringsmaalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaeringsmaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
