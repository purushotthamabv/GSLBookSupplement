import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {

  filteredVideos: any[] = [];
  chapter!: number;
  qr_code!: number;
  videos = [
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


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.chapter = +params['chapter'];
      this.qr_code = +params['qr_code'];

      console.log('Query params:', this.chapter, this.qr_code);

      this.getVideos();
    });
  }

  getVideos() {

    this.filteredVideos = this.videos.filter(video =>
      video.chapter === this.chapter && video.qr_code === this.qr_code
    );

    console.log('Filtered videos:', this.filteredVideos);
  }

  watchVideo(video: any) {
    console.log('Watch video clicked for:', video);
  }
}
