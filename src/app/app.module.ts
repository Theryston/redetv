import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StreamingComponent } from './shared/components/streaming/streaming.component';
import { ShowComponent } from './shared/components/show/show.component';
import { SourceComponent } from './shared/components/source/source.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowPageComponent } from './shared/components/show-page/show-page.component';
import { EpisodesComponent } from './shared/components/episodes/episodes.component';
import { SourcePageComponent } from './shared/components/source-page/source-page.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    StreamingComponent,
    ShowComponent,
    SourceComponent,
    LogoComponent,
    FooterComponent,
    ShowPageComponent,
    EpisodesComponent,
    SourcePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
