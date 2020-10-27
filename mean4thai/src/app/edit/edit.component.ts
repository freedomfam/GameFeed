import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/createposts/Category';
import { EditService } from '../service/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  category = Category ;
  dataId: any;
  data: any;

  constructor(private route: ActivatedRoute, 
    private editService: EditService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dataId = params.get('dataId');
    });
    this.editService.getPostId(this.dataId).subscribe(response => {
      this.data = response[0];
      console.log(this.data);
    });
  }

  submitUpdate() {
    this.editService.UpdateDe(this.data).subscribe(response => {
      alert('แก้ไขเรียบร้อย');
    });
  }

}
