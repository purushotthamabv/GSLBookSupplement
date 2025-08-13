import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VideoDetailViewComponent } from "./video-detail-view/video-detail-view.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Video {
  title: string;
  description: string;
  image: string;
  videoLink: string;
  showOverlay?: boolean;
}

interface VideoGroup {
  chapter: number;
  qr_code: number;
  videos: Video[];
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, VideoDetailViewComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})

export class VideosComponent implements OnInit {
  videos: VideoGroup[] = [];
  filteredVideos: Video[] = [];
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;
  selectedVideo: any = null;
  chapter!: number;
  qr_code!: number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getVideosList()
    
  }

  getVideosList() {
    this.http.get<any>('assets/json/video.json').subscribe(data => {
      this.videos = data.map((video: any) => ({
        ...video,
      }));
      this.fetchRouteParams()
    });
    console.log(this.videos);
  }

  fetchRouteParams() {
    this.route.queryParams.subscribe(params => {
      const chapterParam = params['chapter'] || 1;
      const qrCodeParam = params['qr_code'] || 1;

      if (!chapterParam || !qrCodeParam) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { chapter: 1, qr_code: 1 },
          queryParamsHandling: 'merge',
          replaceUrl: true
        });
        return;
      }

      this.chapter = +chapterParam;
      this.qr_code = +qrCodeParam;

      this.getFilteredVideos();
      
    })
  }

  videosLoaded = false;

  getFilteredVideos() {
    const group = this.videos.find(
      g => g.chapter === this.chapter && g.qr_code === this.qr_code
    );

    this.filteredVideos = group ? group.videos.map((video: any) => ({
      ...video,
      showOverlay: true
    })) : [];


    console.log('Filtered Videos:', this.filteredVideos);
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