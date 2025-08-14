import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ebook-detail-view',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './ebook-detail-view.component.html',
  styleUrl: './ebook-detail-view.component.scss'
})
export class EbookDetailViewComponent implements OnInit {
  ebook: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    console.log('Title:', title);

    const dummyEbooks = [
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

    this.ebook = dummyEbooks.find(e => e.title === title);
  }

}
