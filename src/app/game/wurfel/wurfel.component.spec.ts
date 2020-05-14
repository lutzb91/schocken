import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WurfelComponent } from './wurfel.component';

describe('WurfelComponent', () => {
  let component: WurfelComponent;
  let fixture: ComponentFixture<WurfelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WurfelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WurfelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
