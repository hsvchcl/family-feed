import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTimeLineComponent } from './feed-time-line.component';

describe('FeedTimeLineComponent', () => {
  let component: FeedTimeLineComponent;
  let fixture: ComponentFixture<FeedTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
