import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  videos = [
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

  watchVideo(video: any) {
    console.log('Watch video clicked for:', video);
  }
}
