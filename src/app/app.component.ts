import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	activeTile;
	//I have a passion for creating software, connecting services, tinkering with ideas, and automating everything
	tiles = [
    {text: 'Creating Software', cols: 3, rows: 1, color: 'lightblue', img: 'http://lorempixel.com/300/200/animals'},
    {text: 'Connecting Services', cols: 1, rows: 2, color: 'lightgreen', img: 'http://lorempixel.com/300/200/food'},
    {text: 'Tinkering with ideas', cols: 1, rows: 1, color: 'lightpink', img: 'http://lorempixel.com/300/200/abstract'},
    {text: 'Automating Everything', cols: 2, rows: 1, color: '#DDBDF1', img: 'http://lorempixel.com/300/200/sports'},
  ];

  progressValue = 0;
  constructor() {
  	setInterval(() => {
  		this.progressValue = this.updateProgressValue(this.progressValue);
  	}, 100)
  }
  /*
	clicking a grid item displays a card. Here are the grid items:
		- creating software
		- connecting "services"
		- tinkering with ideas
		- automating everything
  */

  test(tile) {
  	this.activeTile = tile;
  	console.log(tile)
  }

  updateProgressValue(progressValue) {
  	var newProgressValue;
  	if (progressValue < 100) {
  		newProgressValue = progressValue += 0.5;
  	} else {
  		newProgressValue = 0;
  	}
  	return newProgressValue;
  }
}
