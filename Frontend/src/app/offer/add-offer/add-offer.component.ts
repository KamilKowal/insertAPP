import { Component, OnInit, Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() off:any;
  OfferId:string= "";
  OfferName:string= "";
  OfferCategory:number = 0;
  OfferDescription="";
  price = 0;
  OfferCreation="";
 
  ngOnInit(): void {
    this.OfferId=this.off.OfferId;
    this.OfferName=this.off.OfferName;
    this.OfferCategory=this.off.OfferCategory;
    this.OfferDescription=this.off.description;
    this.price=this.off.price;
    this.OfferCreation=this.off.created_at;

  }
  addOffer(){
    var val = {OfferId:this.OfferId,
      OfferName:this.OfferName,
      OfferCategory:this.OfferCategory,
      OfferDescription:this.OfferDescription,
      price:this.price,
      OfferCreation:this.OfferCreation,
    };
    //console.log("Name: "+val.CategoryName+"Ordering: "+ val.CategoryOrdering)
    this.service.addOffer(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateOffer(){
    var val = {OfferId:this.OfferId,
      OfferName:this.OfferName,
      OfferCategory:this.OfferCategory,
      price:this.price,
    };
    this.service.updateOffer(val).subscribe(res=>{
    alert(res.toString());
    });
  }
 

}
