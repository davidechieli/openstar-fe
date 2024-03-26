import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSearchbarComponent } from './simple-searchbar.component';

describe('SimpleSearchbarComponent', () => {
  let component: SimpleSearchbarComponent;
  let fixture: ComponentFixture<SimpleSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
