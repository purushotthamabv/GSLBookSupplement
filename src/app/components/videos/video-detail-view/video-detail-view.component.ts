import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-detail-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './video-detail-view.component.html',
  styleUrl: './video-detail-view.component.scss'
})
export class VideoDetailViewComponent {
  @Input() video: any;
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
    console.log(this.video);
  }

  closePopup() {
    this.close.emit();
  }
}
