import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchboxComponent } from './header-searchbox.component';

describe('HeaderSearchboxComponent', () => {
  let component: HeaderSearchboxComponent;
  let fixture: ComponentFixture<HeaderSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSearchboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
