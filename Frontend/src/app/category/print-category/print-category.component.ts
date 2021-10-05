import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-print-category',
  templateUrl: './print-category.component.html',
  styleUrls: ['./print-category.component.css']
})
export class PrintCategoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any = [];
  listOfProducts:any =[];
  ActivateAddCategoryComponent:boolean=false;
  ModalTitle:string="";//test it
  cat:any;

  ngOnInit(): void {
    this.refreshCatList();
    this.refreshProductList();
    
  }
  refreshCatList(){
      this.service.getCategoryList().subscribe(data =>{
      this.CategoryList=data;
    });
  }
 
  onClick(){
    this.cat={
      CategoryId:0,
      CategoryName:" ",
      CategoryOrdering:0
    }
    this.ModalTitle="Add category";
    this.ActivateAddCategoryComponent=true;
  }
  closeClick(){
    this.ActivateAddCategoryComponent=false;
    this.refreshCatList();
    this.refreshProductList();
  }
  editCategoryClick(item:any){
    this.cat=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddCategoryComponent=true;
  }
  deleteCategoryClick(item:any){
    if(confirm("Sure?")){
      this.service.deleteCategory(item.CategoryId).subscribe(data=>{
        alert("Deleted: "+data.toString());
        this.refreshCatList();
        this.refreshProductList();
      })
    }
  }
  refreshProductList(){
    this.service.getOfferList().subscribe(data =>{
    this.listOfProducts=data;
    });
  }
  onClickTable(test:any){
    var myData:string="";
    for (let item in this.listOfProducts){
      if (this.listOfProducts[item].OfferCategory == test.CategoryId)
        myData += this.listOfProducts[item].OfferName += "\n";
    }
       
    alert(myData);
      
  }
}
