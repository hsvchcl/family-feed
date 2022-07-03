import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedExploreComponent } from './feed-explore.component';

describe('FeedExploreComponent', () => {
  let component: FeedExploreComponent;
  let fixture: ComponentFixture<FeedExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
