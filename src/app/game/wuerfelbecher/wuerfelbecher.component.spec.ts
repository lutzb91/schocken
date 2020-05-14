import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WuerfelbecherComponent } from './wuerfelbecher.component';

describe('WurfelComponent', () => {
  let component: WuerfelbecherComponent;
  let fixture: ComponentFixture<WuerfelbecherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WuerfelbecherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WuerfelbecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
