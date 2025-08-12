import { Routes } from '@angular/router';
import { EbooksComponent } from './components/ebooks/ebooks.component';
import { VideosComponent } from './components/videos/videos.component';
import { LandingComponent } from './components/landing/landing.component';
import { EbookDetailViewComponent } from './components/ebooks/ebook-detail-view/ebook-detail-view.component';
import { VideoDetailViewComponent } from './components/videos/video-detail-view/video-detail-view.component';

export const routes: Routes = [
    { path: 'ebooks', component: EbooksComponent },
    { path: 'ebooks/:title', component: EbookDetailViewComponent },
    { path: 'test/booklink/supplement', component: VideosComponent },
    { path: 'videos/:title', component: VideoDetailViewComponent },
    { path: 'landing', component: LandingComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];
