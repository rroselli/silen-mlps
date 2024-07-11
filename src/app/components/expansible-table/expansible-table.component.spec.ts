import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansibleTableComponent } from './expansible-table.component';

describe('ExpansibleTableComponent', () => {
  let component: ExpansibleTableComponent;
  let fixture: ComponentFixture<ExpansibleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansibleTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansibleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
