import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatMenuModule,
         MatButtonModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatCardModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home-component/home.component';
import { ProjectsComponent } from './components/projects-component/projects.component';
import { BlogComponent } from './components/blog-component/blog.component';
import { ProjectsService } from './services/project.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSidenavModule,
    HttpModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
