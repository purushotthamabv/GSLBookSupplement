import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaryDetailsComponent } from './glossary-details.component';

describe('GlossaryDetailsComponent', () => {
  let component: GlossaryDetailsComponent;
  let fixture: ComponentFixture<GlossaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlossaryDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlossaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
