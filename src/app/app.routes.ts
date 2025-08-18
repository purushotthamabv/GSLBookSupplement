import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { GlossaryComponent } from './components/glossary/glossary.component';
import { GlossaryDetailsComponent } from './components/glossary/glossary-details/glossary-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'AIBook1', pathMatch: 'full' },
    { path: 'AIBook1', component: LandingComponent },
    { path: 'AIBook1/supplement', component: GlossaryComponent },
    { path: 'AIBook1/:title/supplement', component: GlossaryDetailsComponent },
    { path: '**', component: PageNotFoundComponent }
];

