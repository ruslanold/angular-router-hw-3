import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  post: Post;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({postData}) => {
      console.log(postData);
      this.post = postData
    })
   }

   



}
