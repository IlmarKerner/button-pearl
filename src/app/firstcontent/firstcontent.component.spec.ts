import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcontentComponent } from './firstcontent.component';

describe('FirstcontentComponent', () => {
  let component: FirstcontentComponent;
  let fixture: ComponentFixture<FirstcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
