import { Routes } from '@angular/router';
import { EbooksComponent } from './components/ebooks/ebooks.component';
import { VideosComponent } from './components/videos/videos.component';
import { LandingComponent } from './components/landing/landing.component';
import { EbookDetailViewComponent } from './components/ebooks/ebook-detail-view/ebook-detail-view.component';
import { VideoDetailViewComponent } from './components/videos/video-detail-view/video-detail-view.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { GlossaryComponent } from './components/glossary/glossary.component';
import { GlossaryDetailsComponent } from './components/glossary/glossary-details/glossary-details.component';

export const routes: Routes = [
    { path: 'ebooks', component: EbooksComponent },
    { path: 'ebooks/:title', component: EbookDetailViewComponent },
    { path: 'test/booklink/supplement', component: VideosComponent },
    { path: 'test/booklink/supplement/:title', component: VideoDetailViewComponent },
    { path: 'courses', component: GlossaryComponent },
    { path: 'courses/course-v1', component: GlossaryDetailsComponent },
    { path: 'landing', component: LandingComponent },
    { path: '', redirectTo: 'test/booklink/supplement', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
