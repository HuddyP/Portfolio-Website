import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadshotComponent } from './headshot/headshot.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './webpages/home/home.component';
import { AboutMeComponent } from './webpages/about-me/about-me.component';
import { MyProjectsComponent } from './webpages/my-projects/my-projects.component';
import { ContactMeComponent } from './webpages/contact-me/contact-me.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AudioFabComponent } from './audio-fab/audio-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadshotComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ContactMeComponent,
    FooterBarComponent,
    AudioPlayerComponent,
    AudioFabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
