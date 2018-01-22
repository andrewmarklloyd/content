import { Component } from '@angular/core';
import { ProjectsService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeProjectType: Array<Object>;
  activeProjectName;
  showMore: boolean;
  projects: Object;

  constructor(private projectService: ProjectsService) {
    this.showMore = false;
    this.projectService.getProjects()
      .subscribe(res => {
        this.projects = JSON.parse(res.text());
      })
  }

  toggleMore() {
    this.showMore = !this.showMore;
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

  test(projectType, projectName) {
    this.activeProjectName = projectName
    this.activeProjectType = this.projects[projectType];
    console.log(this.activeProjectType)
  }

}
