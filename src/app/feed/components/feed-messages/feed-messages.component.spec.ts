import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMessagesComponent } from './feed-messages.component';

describe('FeedMessagesComponent', () => {
  let component: FeedMessagesComponent;
  let fixture: ComponentFixture<FeedMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
