import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly myURL = "http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }

  getCategoryList():Observable<any[]>{
    return this.http.get<any>(this.myURL + '/category/');
  }
  addCategory(val:any){
    return this.http.post(this.myURL + '/category/',val);
  }
  updateCategory(val:any){
    return this.http.put(this.myURL + '/category/',val);
  }
  deleteCategory(val:any){
    return this.http.delete(this.myURL + '/category/' + val);
  }
  
  getOfferList():Observable<any[]>{
    return this.http.get<any>(this.myURL + '/offer/');
  }
  addOffer(val:any){
    return this.http.post(this.myURL + '/offer/',val);
  }
  updateOffer(val:any){
    return this.http.put(this.myURL + '/offer/',val);
  }
  deleteOffer(val:any){
    return this.http.delete(this.myURL + '/offer/' + val);
  }
}
