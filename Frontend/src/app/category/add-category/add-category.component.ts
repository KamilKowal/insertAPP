import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input() cat:any;
  CategoryId:string= "";
  CategoryName:string= "";
  Ordering:number = 0;
 
  ngOnInit(): void {
    this.CategoryId=this.cat.CategoryId;
    this.CategoryName=this.cat.CategoryName;
    this.Ordering=this.cat.Ordering;
  }
  addCategory(){
    var val = {CategoryId:this.CategoryId,
      CategoryName:this.CategoryName,
      Ordering:this.Ordering
    };
    //console.log("Name: "+val.CategoryName+"Ordering: "+ val.CategoryOrdering)
    this.service.addCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateCategory(){
    var val = {CategoryId:this.CategoryId,
      CategoryName:this.CategoryName,
      Ordering:this.Ordering,
    };
    this.service.updateCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }
 
  
}
