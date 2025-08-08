import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ebooks',
  standalone: true,
  imports: [CommonModule , RouterModule ],
  templateUrl: './ebooks.component.html',
  styleUrl: './ebooks.component.scss'
})
export class EbooksComponent {

  ebooks = [
    {
      title: 'Mastering Angular',
      author: 'John Doe',
      description: 'A comprehensive guide to Angular framework.',
      image: 'https://dummyimage.com/300',
      downloadLink: '#'
    },
    {
      title: 'TypeScript in Depth',
      author: 'Jane Smith',
      description: 'Deep dive into TypeScript with real-world examples.',
      image: 'https://dummyimage.com/300',
      downloadLink: '#'
    },
    {
      title: 'Frontend Architect',
      author: 'Alan White',
      description: 'Design scalable frontend architectures with ease.',
      image: 'https://dummyimage.com/300',
      downloadLink: '#'
    },
    {
      title: 'RxJS Essentials',
      author: 'Maria Green',
      description: 'Reactive programming with RxJS for Angular developers.',
      image: 'https://dummyimage.com/300',
      downloadLink: '#'
    },
    {
      title: 'SCSS for Pros',
      author: 'Liam Blue',
      description: 'Write clean, maintainable styles using SCSS.',
      image: 'https://dummyimage.com/300',
      downloadLink: '#'
    },
    {
      title: 'Web Performance',
      author: 'Eva Grey',
      description: 'Speed up your apps with performance optimization.',
      image: 'https://dummyimage.com/300',
      downloadLink: '#'
    }
  ];

}
