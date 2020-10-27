import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostviewService } from '../service/postview.service'
@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private postviceService: PostviewService) { }
  dataId: any;
  data: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dataId = params.get('dataId');
    });
    this.postviceService.getPostId(this.dataId).subscribe(response => {
      this.data = response[0];
    });
  }

}
