import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCardModalComponent } from './company-card-modal.component';

describe('CompanyCardModalComponent', () => {
  let component: CompanyCardModalComponent;
  let fixture: ComponentFixture<CompanyCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyCardModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
