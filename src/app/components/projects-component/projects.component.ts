import { Component } from '@angular/core';
import { ProjectsService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  showEmbedContent: boolean;
  activeProjectType: Object;
  showMore: boolean;
  toggleText: String;
  projects: Array<Object>;

  constructor(private projectService: ProjectsService) {
    this.showEmbedContent = false;
    this.showMore = false;
    this.toggleText = 'MORE';
    this.projectService.getProjects()
      .subscribe(res => {
        this.projects = JSON.parse(res.text());
        this.activeProjectType = this.projects[1];
      })
  }

  toggleMore() {
    this.showMore = !this.showMore;
    this.toggleText = this.showMore ? 'LESS' : 'MORE';
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

  test(projectType) {
    const index = this.getProjectType(projectType, this.projects);
    this.activeProjectType = this.projects[index];
    if (this.showMore) {
      this.toggleMore();
    }
  }

  getProjectType(projectType: String, projects: Array<Object>) {
    var projectIndex;
    var i = 0;
    projects.forEach(project => {
      if (project['projectType'] === projectType) {
        projectIndex = i;
        return;
      }
      i++;
    })
    return projectIndex;
  }

  toggleEmbedContent() {
    this.showEmbedContent = !this.showEmbedContent;
  }

}
