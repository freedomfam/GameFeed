import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/Posts.service';
import { Category } from './Category';
import { AuthService } from '@app/shared/services';


@Component({
  selector: 'app-createposts',
  templateUrl: './createposts.component.html',
  styleUrls: ['./createposts.component.css']
})
export class CreatepostsComponent implements OnInit {
  category = Category ;
  postdatas: any;
  selectedValue : any;
  user_data:any;
  postdataAdd = {
    'category':'',
    'topic': '',
    'description': '',
    'user_data': '',

  }


  constructor(private postsService: PostsService,
    private authService: AuthService ) { }

  ngOnInit() {
    this.fetchData();
    this.authService.getUser().subscribe(data => this.user_data = data);
    this.postdataAdd = {
      'category':'',
      'topic': '',
      'description': '',
      'user_data': this.user_data._id,
    }

  }
  fetchData() {
    this.postsService.getPostdatas().subscribe(response => {
      this.postdatas = response;
      console.log(this.postdatas);
    });
  }
  submitReviewAdd() {
    console.log(this.postdataAdd);
    this.fetchData();
    this.postsService.postPostdatas(this.postdataAdd).subscribe((response: {}) => alert('บันทึกเรียบร้อย'));

  }
  deleteData(data: any) {
    console.log(data);
    this.postsService.deletePostdatas(data).subscribe((response: {}) => alert('ลบเรียบร้อย'));
    this.fetchData();
  }
}
