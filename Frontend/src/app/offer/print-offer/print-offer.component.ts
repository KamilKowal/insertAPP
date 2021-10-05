import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-print-offer',
  templateUrl: './print-offer.component.html',
  styleUrls: ['./print-offer.component.css']
})
export class PrintOfferComponent implements OnInit {

  constructor(private service:SharedService) { }

  OfferList:any = [];
  ActivateAddOfferComponent:boolean=false;
  ModalTitle:string="";//test it
  off:any;

  ngOnInit(): void {
    this.refreshOffList();
    
  }
  refreshOffList(){
      this.service.getOfferList().subscribe(data =>{
      this.OfferList=data;
    });
  }
 
  onClick(){
    this.off={
      OfferId:0,
      OfferName:" ",
      OfferDescription:"",
      OfferPrice:0,
      OfferCreated:""
    }
    this.ModalTitle="Add offer";
    this.ActivateAddOfferComponent=true;
  }
  closeClick(){
    this.ActivateAddOfferComponent=false;
    this.refreshOffList();
  }
  editOfferClick(item:any){
    this.off=item;
    this.ModalTitle="Edit Offer";
    this.ActivateAddOfferComponent=true;
  }
  deleteOfferClick(item:any){
    if(confirm("Sure?")){
      this.service.deleteOffer(item.OfferId).subscribe(data=>{
        alert("Deleted: "+data.toString());
        this.refreshOffList();
      })
    }
  }

}
