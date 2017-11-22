import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanPipeComponent } from './lean-pipe.component';

describe('LeanPipeComponent', () => {
  let component: LeanPipeComponent;
  let fixture: ComponentFixture<LeanPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
