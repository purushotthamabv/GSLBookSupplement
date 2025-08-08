import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookDetailViewComponent } from './ebook-detail-view.component';

describe('EbookDetailViewComponent', () => {
  let component: EbookDetailViewComponent;
  let fixture: ComponentFixture<EbookDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbookDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EbookDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
