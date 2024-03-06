import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEsgCommitmentComponent } from './my-esg-commitment.component';

describe('MyEsgCommitmentComponent', () => {
  let component: MyEsgCommitmentComponent;
  let fixture: ComponentFixture<MyEsgCommitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyEsgCommitmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyEsgCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
