import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlossaryEntry } from '../../../model/glossary.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-glossary-details',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './glossary-details.component.html',
  styleUrl: './glossary-details.component.scss'
})
export class GlossaryDetailsComponent implements OnInit {
  chapter:any;
  qr_code:any;
  glossaryData: GlossaryEntry[] = [];
  filteredEntry?: GlossaryEntry;

  constructor(private route: ActivatedRoute , private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.chapter = params.get('chapter');
      this.qr_code = params.get('qr_code');
      console.log('Chapter:', this.chapter);
      console.log('QR Code:', this.qr_code);
      this.loadGlossaryData();
    });
  }

  loadGlossaryData() {
    this.http.get<GlossaryEntry[]>('assets/json/glossary.json').subscribe(data => {
      this.glossaryData = data;

      this.filteredEntry = this.glossaryData.find(item =>
        (item as any).chapter?.toString() === this.chapter &&
        (item as any).qr_code?.toString() === this.qr_code
      );
      console.log('Glossary data:', this.glossaryData);
      console.log('Filtered entry:', this.filteredEntry);
    });
  }
}
