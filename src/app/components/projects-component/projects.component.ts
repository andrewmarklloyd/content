import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeTile;

  tiles = [
    {text: 'Creating Software', cols: 3, rows: 1, color: 'lightblue', img: 'http://lorempixel.com/300/200/animals'},
    {text: 'Connecting Services', cols: 1, rows: 2, color: 'lightgreen', img: 'http://lorempixel.com/300/200/food'},
    {text: 'Tinkering with ideas', cols: 1, rows: 1, color: 'lightpink', img: 'http://lorempixel.com/300/200/abstract'},
    {text: 'Automating Everything', cols: 2, rows: 1, color: '#DDBDF1', img: 'http://lorempixel.com/300/200/sports'},
  ];

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
