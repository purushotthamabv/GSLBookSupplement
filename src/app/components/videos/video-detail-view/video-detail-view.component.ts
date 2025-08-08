import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ For *ngIf

@Component({
  selector: 'app-video-detail-view',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './video-detail-view.component.html',
  styleUrl: './video-detail-view.component.scss'
})
export class VideoDetailViewComponent {
  video: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');

    const videos = [
      {
        title: 'Angular Basics',
        author: 'John Doe',
        description: 'Learn the basics of Angular framework.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        title: 'Advanced TypeScript',
        author: 'Jane Smith',
        description: 'Go beyond the basics with TypeScript.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        title: 'Modern Frontend Architecture',
        author: 'Alan White',
        description: 'Architecting frontend apps the modern way.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        title: 'Mastering RxJS',
        author: 'Maria Green',
        description: 'Use RxJS effectively in your Angular projects.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        title: 'SCSS Deep Dive',
        author: 'Liam Blue',
        description: 'Advanced styling with SCSS.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        title: 'Web Optimization Tips',
        author: 'Eva Grey',
        description: 'Speed and performance tuning for modern web apps.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ];

    this.video = videos.find(v => v.title === title);
    console.log('Video:', this.video);
  }
}
