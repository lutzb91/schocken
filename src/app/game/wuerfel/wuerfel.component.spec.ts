import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WuerfelComponent } from './wuerfel.component';

describe('WuerfelComponent', () => {
  let component: WuerfelComponent;
  let fixture: ComponentFixture<WuerfelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WuerfelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WuerfelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
