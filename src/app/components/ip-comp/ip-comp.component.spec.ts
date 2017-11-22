import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCompComponent } from './ip-comp.component';

describe('IpCompComponent', () => {
  let component: IpCompComponent;
  let fixture: ComponentFixture<IpCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
