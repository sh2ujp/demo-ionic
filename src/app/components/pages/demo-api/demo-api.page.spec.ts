import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DemoAPIPage}               from './demo-api.page';

describe('DemoAPIPage', () => {
  let component: DemoAPIPage;
  let fixture: ComponentFixture<DemoAPIPage>;

  beforeEach(async(() => {
    fixture   = TestBed.createComponent(DemoAPIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
