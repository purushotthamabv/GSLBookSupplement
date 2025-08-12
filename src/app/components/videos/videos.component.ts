import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VideoDetailViewComponent } from "./video-detail-view/video-detail-view.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, VideoDetailViewComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
  videos: any[] = [];
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;
  selectedVideo: any = null;
  filteredVideos: any[] = [];
  chapter!: number;
  qr_code!: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.getVideosList()
    this.fetchRouteParams()
  }

  getVideosList() {
    this.http.get<any>('assets/json/video.json').subscribe(data => {
      this.videos = data.map((video: any) => ({
        ...video,
      }));
    });
  }

  fetchRouteParams() {
    this.route.queryParams.subscribe(params => {
      this.chapter = +params['chapter'];
      this.qr_code = +params['qr_code'];
      this.getFilteredVideos();
    });
  }

  getFilteredVideos() {
    const group = this.videos.find(
      g => g.chapter === this.chapter && g.qr_code === this.qr_code
    );

    this.filteredVideos = group ? group.videos.map((video: any) => ({
      ...video,
      showOverlay: true
    })) : [];
  }

  playVideo(videoElement: HTMLVideoElement, video: any) {
    this.videoPlayers.forEach(playerRef => {
      if (playerRef.nativeElement !== videoElement) {
        playerRef.nativeElement.pause();
      }
    });

    this.filteredVideos.forEach(v => {
      if (v !== video) {
        v.showOverlay = true;
      }
    });

    videoElement.play();
    video.showOverlay = false;
  }

  openVideoDetail(video: any) {
    this.videoPlayers.forEach(playerRef => {
      playerRef.nativeElement.pause();
    });

    this.filteredVideos.forEach(v => {
      v.showOverlay = true;
    });
    this.selectedVideo = video;
  }

  closeVideoDetail() {
    this.selectedVideo = null;
  }
}