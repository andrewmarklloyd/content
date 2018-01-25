import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class ProjectsService {

  constructor(private http: Http) {

  }

  getProjects() {
  	return this.http.get('assets/api/projects.json');
  }

  getBiography() {
		return this.http.get('assets/api/biography.json');
  }

  getBlogPosts() {
		return this.http.get('https://wt-1364ed7c3f0364e6608ffd3c14d53518-0.run.webtask.io/blog-posts');
  }

}