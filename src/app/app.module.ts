import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StreamingComponent } from './shared/components/streaming/streaming.component';
import { ShowComponent } from './shared/components/show/show.component';
import { SourceComponent } from './shared/components/source/source.component';
import { LogoComponent } from './shared/components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StreamingComponent,
    ShowComponent,
    SourceComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
