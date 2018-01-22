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

}