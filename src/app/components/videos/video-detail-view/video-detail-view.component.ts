import { Component } from '@angular/core';
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
  video: any;
  showOverlay = true;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');

    const videos = [
      {
        title: 'Angular Basics',
        author: 'John Doe',
        description: 'Learn the basics of Angular framework.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        chapter: 1,
        qr_code: 1
      },
      {
        title: 'Advanced TypeScript',
        author: 'Jane Smith',
        description: 'Go beyond the basics with TypeScript.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        chapter: 1,
        qr_code: 1
      },
      {
        title: 'Modern Frontend Architecture',
        author: 'Alan White',
        description: 'Architecting frontend apps the modern way.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        chapter: 1,
        qr_code: 2
      },
      {
        title: 'Mastering RxJS',
        author: 'Maria Green',
        description: 'Use RxJS effectively in your Angular projects.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        chapter: 1,
        qr_code: 1
      },
      {
        title: 'SCSS Deep Dive',
        author: 'Liam Blue',
        description: 'Advanced styling with SCSS.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        chapter: 1,
        qr_code: 2
      },
      {
        title: 'Web Optimization Tips',
        author: 'Eva Grey',
        description: 'Speed and performance tuning for modern web apps.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        chapter: 1,
        qr_code: 3
      },

      // Chapter 2 videos
      {
        title: 'Node.js Fundamentals',
        author: 'Chris Brown',
        description: 'Learn server-side JavaScript with Node.js.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        chapter: 2,
        qr_code: 1
      },
      {
        title: 'Express.js Crash Course',
        author: 'Sarah Connor',
        description: 'Quickly get up and running with Express.js.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        chapter: 2,
        qr_code: 2
      },
      {
        title: 'MongoDB Basics',
        author: 'David Clark',
        description: 'Introduction to NoSQL databases using MongoDB.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        chapter: 2,
        qr_code: 3
      },

      // Chapter 3 videos
      {
        title: 'Docker Essentials',
        author: 'Rachel Adams',
        description: 'Learn containerization with Docker.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        chapter: 3,
        qr_code: 1
      },
      {
        title: 'Kubernetes for Beginners',
        author: 'Tom Harris',
        description: 'Manage containerized applications with Kubernetes.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        chapter: 3,
        qr_code: 2
      },
      {
        title: 'CI/CD Pipelines',
        author: 'Emma White',
        description: 'Automate deployments using CI/CD pipelines.',
        image: 'https://dummyimage.com/300',
        videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        chapter: 3,
        qr_code: 3
      }
    ];

    this.video = videos.find(v => v.title === title);
    console.log('Video:', this.video);
  }

  playVideo(videoElement: HTMLVideoElement) {
    videoElement.play();
    this.showOverlay = false;
  }

  goBack() {
    if (this.video) {
      this.router.navigate(['/test/booklink/supplement'], {
        queryParams: {
          chapter: this.video.chapter,
          qr_code: this.video.qr_code
        }
      });
    } else {
      const chapter = this.route.snapshot.queryParamMap.get('chapter') || 1;
      const qr_code = this.route.snapshot.queryParamMap.get('qr_code') || 1;

      this.router.navigate(['/test/booklink/supplement'], {
        queryParams: { chapter, qr_code }
      });
    }
  }
}
