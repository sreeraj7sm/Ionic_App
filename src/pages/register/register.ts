import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LogprovProvider } from '../../providers/logprov/logprov';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:String="";
  password:String="";
  confpassword:String="";
  name:String="";
  phone:String="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController, public apiProvider:LogprovProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    if(this.apiProvider.email.length==0 || this.apiProvider.password.length==0 || this.apiProvider.confpassword.length==0 || this.apiProvider.name.length==0 || this.apiProvider.phone.length==0){
      let toast=this.toastCtrl.create({
        message:"Please enter all the details",
        duration:3000
      })
      toast.present();
    }
    else if(this.apiProvider.email.includes("@")==false || this.apiProvider.email.includes(".com")==false){
      let toast=this.toastCtrl.create({
        message:"Enter email address in correct format",
        duration:3000
      })
      toast.present();
    }
    else if(/\d/.test(this.apiProvider.name.toString())==true){
      let toast=this.toastCtrl.create({
        message:"Name should be alphabets only",
        duration:3000
      })
      toast.present();
    }
    else if(this.apiProvider.phone.length>10 || this.apiProvider.phone.length<10){
      let toast=this.toastCtrl.create({
        message:"Phone number should be 10 digits",
        duration:3000
      })
      toast.present();
    }
    else if(this.apiProvider.password!=this.apiProvider.confpassword){
      let toast=this.toastCtrl.create({
        message:"Passwords entered are different from each other",
        duration:3000
      })
      toast.present();
    }
    else{
      this.apiProvider.getAPI().subscribe(apiData=> console.log(apiData));
      console.log("Added details")
      let toast=this.toastCtrl.create({
        message:"Registration successful!",
        duration:3000
      })
      toast.present();
      this.navCtrl.push(LoginPage);
    }
  }
  goout(){
    this.navCtrl.pop();
  }
}
