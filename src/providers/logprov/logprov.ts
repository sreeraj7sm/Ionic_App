import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LogprovProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogprovProvider {
  name:String="";
  email:String="";
  phone:String="";
  password:String="";
  confpassword:String="";
  id:any;

  constructor(public http: HttpClient) {
    console.log('Hello LogprovProvider Provider');
  }
  getAPI(){
    const API:string="http://localhost:7362/api/register/getreg?email="+this.email+"&&name="+this.name+"&&phone="+this.phone+"&&password="+this.password+"&&confpassword="+this.confpassword+"";
    return this.http.get(API);
  }
  getAPI1(){
    const API:string="http://localhost:7362/api/register/getemp?email="+this.email+"&&password="+this.password+"";
    return this.http.get(API);
  }
  getAPI2(){
    const API:string="http://localhost:7362/api/register/getart";
    return this.http.get(API);
  }
}
