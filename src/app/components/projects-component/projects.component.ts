import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeTile;

  tiles = [
    {
      text: 'Military Kids Connect',
      cols: 3,
      rows: 1,
      class: 'indigo1'
    },
    {
      text: 'Aircrew App',
      cols: 1,
      rows: 2,
      color: 'lightgreen',
      class: 'indigo4'},
    {
      text: 'Git Workflow',
      cols: 1,
      rows: 1,
      class: 'indigo3'
    },
    {
      text: 'Volunteer Scheduler',
      cols: 2,
      rows: 1,
      class: 'indigo2'
    },
  ];
  //SEDaily, STATUS board, PLA webmaster, Spotify bot, ROKU wifi remote
  updateProgressValue(progressValue) {
    var newProgressValue;
    if (progressValue < 100) {
      newProgressValue = progressValue += 0.5;
    } else {
      newProgressValue = 0;
    }
    return newProgressValue;
  }

  test(tile) {
    this.activeTile = tile;
  }

}
