import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlossaryEntry } from '../../../model/glossary.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VideoDetailViewComponent } from '../../videos/video-detail-view/video-detail-view.component';

@Component({
  selector: 'app-glossary-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, VideoDetailViewComponent],
  templateUrl: './glossary-details.component.html',
  styleUrl: './glossary-details.component.scss'
})
export class GlossaryDetailsComponent implements OnInit {
  chapter: any;
  qr_code: any;
  glossaryData: any[] = [];
  filteredEntry?: any;
  selectedVideo: any = null;
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

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
    this.http.get<GlossaryEntry[]>('assets/json/supplement.json').subscribe(data => {
      this.glossaryData = data;

      const chapterObj = this.glossaryData.find(c => c.chapter === this.chapter?.split('.')[0]);

      if (chapterObj) {
        this.filteredEntry = chapterObj.subchapters.find((sc: any) =>
          sc.chapter === this.chapter &&
          sc.qr_code === this.qr_code
        );
      }

      console.log('Glossary data:', this.glossaryData);
      console.log('Filtered entry:', this.filteredEntry);
    });
  }

  openVideoDetail(video: any) {
    console.log('Opening video:', video);
    console.log('Current selected video:', this.selectedVideo);
    this.videoPlayers.forEach(playerRef => {
      playerRef.nativeElement.pause();
    });

    console.log("Pausing all other videos", this.videoPlayers);

    this.selectedVideo = video;

    console.log('Updated selected video:', this.selectedVideo);
  }

  closeVideoDetail() {
    this.selectedVideo = null;
  }

  downloadFile(filePath: string) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'download';
    link.target = "_blank";
    link.click();
  }
}
