import { Component } from '@angular/core';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  google;
  posts;
  postsLoaded: boolean;

  constructor() {
  	this.google = window['google']
  	this.google.load("gdata", "1.x", { packages : ["blogger"] });
  	var self = this;
  	this.google.setOnLoadCallback(function(){
  		self._run(function(posts){
  			console.log('done')
  			self.posts = posts;
  			self.postsLoaded = true;
  		})
  	});
  }

  _run(callback) {
  	var bloggerService =
            new this.google.gdata.blogger.BloggerService('andrewmarklloyd.github.io')
    var feedUri = 'https://andrewmarklloyd.blogspot.com/feeds/posts/default';
    var posts = []
    bloggerService.getBlogPostFeed(feedUri, (data) => {
    	const entries = data.feed.getEntries();
    	entries.forEach(entry => {
    		posts.push(
    			{
    				title: entry.getTitle().getText(),
    				content: entry.getContent().getText()
    			})
    	})
    	callback(posts)

    }, (b) => {
    	console.log('error:', b)
    });
    /*
          var postEntry = postsFeedRoot.feed.getEntries()[0]; // only get first post
          var entryUri = postEntry.getSelfLink().getHref();   // post's uri
    */
  }
}
