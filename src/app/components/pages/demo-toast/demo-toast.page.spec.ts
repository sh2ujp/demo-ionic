import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DemoToastPage}             from './demo-toast.page';

describe('DemoToastPage', () => {
  let component: DemoToastPage;
  let fixture: ComponentFixture<DemoToastPage>;

  beforeEach(async(() => {
    fixture   = TestBed.createComponent(DemoToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
