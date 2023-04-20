import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdcontentComponent } from './thirdcontent.component';

describe('ThirdcontentComponent', () => {
  let component: ThirdcontentComponent;
  let fixture: ComponentFixture<ThirdcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
