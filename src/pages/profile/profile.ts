import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogprovProvider } from '../../providers/logprov/logprov';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name:String="";
  email:String="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider:LogprovProvider) {
    this.apiProvider.getAPI1().subscribe(apiData => {
      console.log(apiData);
      this.name=apiData[0].name;
      this.email = apiData[0].email;})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  back(){
    this.navCtrl.pop();
  }
}
