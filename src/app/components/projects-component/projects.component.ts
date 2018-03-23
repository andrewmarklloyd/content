import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ProjectsService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  showEmbedContent: boolean;
  activeProjectType: Object;
  projects: Array<Object>;
  projectType: String;

  constructor(private projectService: ProjectsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.showEmbedContent = false;
    this.projectService.getProjects()
      .subscribe(res => {
        this.projects = JSON.parse(res.text());
        this.activeProjectType = this.projects[0];
        const storageProjectType = window.localStorage.getItem('_projectType');
        const queryProjectType = this.activatedRoute.snapshot.queryParams.type;
        this.activatedRoute.snapshot.queryParams.type
        if (storageProjectType) {
          this.toggleProject(storageProjectType);
        } else if (queryProjectType) {
          this.toggleProject(queryProjectType);
        } else {
          this.toggleProject(this.projects[0]['projectType'])
        }
      })
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

  setQueryParams(projectType) {
    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['type'] = projectType;
    this.router.navigate(['projects'], { queryParams: queryParams });
  }

  toggleProject(projectType) {
    this.setQueryParams(projectType);
    var index = this.getProjectType(projectType, this.projects);
    index = index ? index : 0;
    this.activeProjectType = this.projects[index];
    window.localStorage.setItem('_projectType', this.activeProjectType['projectType']);
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
