import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DemoAlertPage}             from './demo-alert.page';

describe('DemoAlertPage', () => {
  let component: DemoAlertPage;
  let fixture: ComponentFixture<DemoAlertPage>;

  beforeEach(async(() => {
    fixture   = TestBed.createComponent(DemoAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
