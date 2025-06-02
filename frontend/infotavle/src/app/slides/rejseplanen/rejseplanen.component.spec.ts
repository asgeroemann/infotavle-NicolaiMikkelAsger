import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejseplanenComponent } from './rejseplanen.component';

describe('RejseplanenComponent', () => {
  let component: RejseplanenComponent;
  let fixture: ComponentFixture<RejseplanenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejseplanenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejseplanenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
