import { Component } from '@angular/core';
import { ProjectsService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	introText: Array<Object>;

  constructor(private projectService: ProjectsService) {
  	this.projectService.getBiography()
      .subscribe(res => {
        this.introText = JSON.parse(res.text());
      });
  }

}
