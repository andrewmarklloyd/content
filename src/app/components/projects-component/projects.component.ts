import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeTile;
  showMore: boolean;

  tiles = [
    {
      blockTitle: 'MKC Infographic',
      title: 'Military Kids Connect Infographic',
      subtitle: 'Interactive infographic to help children and youth cope with the issues that come with parent with PTSD.',
      content: 'Here is some more text and a screenshot or video',
      cols: 3,
      rows: 1,
      class: 'indigo1',
      link: 'http://militarykidsconnect.dcoe.mil/what-is-ptsd',
      more: true
    },
    {
      blockTitle: 'Aircrew App',
      title: 'Aircrew App',
      cols: 1,
      rows: 2,
      class: 'indigo4'
    },
    {
      blockTitle: 'Git Workflow',
      title: 'Git Workflow',
      cols: 1,
      rows: 1,
      class: 'indigo3'
    },
    {
      blockTitle: 'Volunteer Scheduler',
      title: 'Volunteer Scheduler',
      cols: 2,
      rows: 1,
      class: 'indigo2'
    },
  ];

  constructor() {
    this.activeTile = this.tiles[0];
    this.showMore = false;
  }

  toggleMore() {
    this.showMore = !this.showMore;
  }

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
