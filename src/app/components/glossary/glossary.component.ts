import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlossaryEntry } from '../../model/glossary.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.scss'
})
export class GlossaryComponent implements OnInit {
  glossaryData: any[] = [];
  chapter!: number;
  qr_code!: number;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadGlossaryData();
    this.route.paramMap.subscribe(params => {
      this.chapter = Number(params.get('chapter')) || 1;
      this.qr_code = Number(params.get('qr_code')) || 1;
    });
  }

  loadGlossaryData() {
    // fetch('assets/json/glossary.json')
    //   .then(response => response.json())
    //   .then((data: GlossaryEntry[]) => {
    //     // this.glossaryData = data;
    //   })
    //   .catch(error => console.error('Error loading glossary data:', error));

    this.http.get<any>('assets/json/supplement.json').subscribe(data => {
      // console.log('Supplement data loaded:', data);
      this.glossaryData = data;
      console.log('Current glossary data:', this.glossaryData);
    });
  }

  getShortDescription(text: string): string {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > 10 ? words.slice(0, 10).join(' ') + '...' : text;
  }

  // readMore(item: any) {
  //   console.log('Read more clicked for item:', item);

  //   this.router.navigate(['/AIBook1/supplement'], {
  //     queryParams: {
  //       chapter: item.chapter,
  //       qr_code: item.qr_code
  //     }
  //   });
  // }

  readMore(item: any) {
    console.log('Read more clicked for item:', item);

    this.router.navigate([`/AIBook1/${item.title.toLowerCase()}/supplement`], {
      queryParams: {
        chapter: item.chapter,
        qr_code: item.qr_code
      }
    });
  }


}
