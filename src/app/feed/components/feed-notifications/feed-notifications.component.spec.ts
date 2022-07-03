import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNotificationsComponent } from './feed-notifications.component';

describe('FeedNotificationsComponent', () => {
  let component: FeedNotificationsComponent;
  let fixture: ComponentFixture<FeedNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
