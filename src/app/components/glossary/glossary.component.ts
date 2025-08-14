import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlossaryEntry } from '../../model/glossary.model';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.scss'
})
export class GlossaryComponent implements OnInit {
  glossaryData: GlossaryEntry[] = [];
  chapter!: number;
  qr_code!: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadGlossaryData();
    this.route.paramMap.subscribe(params => {
      this.chapter = Number(params.get('chapter')) || 1; // fallback to 1
      this.qr_code = Number(params.get('qr_code')) || 1; // fallback to 1
    });
  }

  loadGlossaryData() {
    fetch('assets/json/glossary.json')
      .then(response => response.json())
      .then((data: GlossaryEntry[]) => {
        this.glossaryData = data;
        // this.fetchRouteParams()
      })
      .catch(error => console.error('Error loading glossary data:', error));
  }

  getShortDescription(text: string): string {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > 10 ? words.slice(0, 10).join(' ') + '...' : text;
  }

  readMore(item: any) {
    console.log('Read more clicked for item:', item);

    const chapter = item.chapter;
    const qr_code = item.qr_code;

    // this.router.navigate(
    //   ['/courses/course-v1', chapter, qr_code],
    //   { state: { entry: item } }
    // );


    this.router.navigate(['/courses/course-v1'], {
    queryParams: { 
      chapter: item.chapter, 
      qr_code: item.qr_code 
    }
  });
  }

}
