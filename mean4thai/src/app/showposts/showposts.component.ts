import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/Posts.service';
import { ActivatedRoute } from '@angular/router';
import { Router, ParamMap } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CommentService } from '../service/Comment.service';
import { AuthService } from '@app/shared/services';
@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent implements OnInit {
  id:any;
  postdatas: any;
  postdataAdd = {
    'id':'',
    'topic': '',
    'description': '',
    'category':'',


  }
  user_data: any;

  comments: any;
  commentAdd = {
    'description': '',
    'id_post': '',
  }


  constructor(private postsService: PostsService,private commentService: CommentService, private route: ActivatedRoute,private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => this.user_data = data);
    this.route.paramMap.subscribe(params => {
      this.id =params.get('dataID');
    });
    this.postsService.getshow(this.id).subscribe(response => {
      this.postdataAdd = {
        'id':response[0]._id,
        'topic': response[0].topic,
        'description': response[0].description,
        'category':response[0].category,
      },
      this.commentAdd = {
        'description': '',
        'id_post': response[0]._id,
      }
      console.log(this.postdataAdd);

    });
    this.pushData();
  }
  fetchData() {
    this.postsService.getPostdatas().subscribe(response => {
      this.postdatas = response;
      console.log(this.postdatas);
    });
  }

  pushData() {
    this.commentService.getComments().subscribe(response1 => {
      this.comments = response1;
      console.log(this.comments);
    });
  }
  submitReviewAdd() {
    // console.log(this.postdataAdd);
    this.pushData();
    this.commentService.postComments(this.commentAdd).subscribe((response: {}) => alert('บันทึกเรียบร้อย'));
  }




}
