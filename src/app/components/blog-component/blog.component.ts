import { Component } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { ProjectsService } from '../../services/project.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts;
  loading: boolean;

  constructor(private projectService: ProjectsService) {
    this.loading = true;
    this.posts = [];
    this.projectService.getBlogPosts()
      .subscribe(res => {
        const feed = res.json().feed.entry;
        feed.forEach(post => {
          var title;
          var postPublished;
          var url;
          var content;
          this.posts.push({
            title: post.title['$t'],
            postPublished: post.published['$t'].substring(0, 10),
            url: post.link[4].href,
            content: post.content['$t']
          })
          this.loading = false;
        })
      })
  }

  /*
  * 
  */
  getPostLink() {

  }

  
}
