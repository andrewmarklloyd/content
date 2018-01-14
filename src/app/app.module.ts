import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

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

import { ProjectsComponent } from './components/projects-component/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
