import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderRoutingComponent } from './header-routing.component';

describe('HeaderRoutingComponent', () => {
  let component: HeaderRoutingComponent;
  let fixture: ComponentFixture<HeaderRoutingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
