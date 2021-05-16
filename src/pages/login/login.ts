import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, ToastController } from 'ionic-angular';
import { textChangeRangeIsUnchanged } from 'typescript';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { LogprovProvider } from '../../providers/logprov/logprov';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage: any;
  email:String="";
  password:String="";
  id:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public toastCtrl:ToastController, public apiProvider:LogprovProvider) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
  login(){
    if(this.apiProvider.email.length==0 || this.apiProvider.password.length==0){
      let toast=this.toastCtrl.create({
        message:"Please enter login details",
        duration:3000
      })
      toast.present();
    }
    else if(this.apiProvider.email.includes("@")==false || this.apiProvider.email.includes(".com")==false){
      let toast=this.toastCtrl.create({
        message:"Please enter email in the correct format",
        duration:3000
      })
      toast.present();
    }
    else{
      this.apiProvider.getAPI1().subscribe(apiData=>{
        if(apiData!=""){ 
          let toast=this.toastCtrl.create({
            message:"Logged in successfully",
            duration:3000
          })
          toast.present();
          this.navCtrl.setRoot(HomePage);
          this.menuCtrl.enable(true);
          this.rootPage = LoginPage;
          console.log(apiData);
        }
        else{
          let toast=this.toastCtrl.create({
            message:"This user does not exist",
            duration:3000
          })
          toast.present();
          console.log("error");
        }}
        )
    }
  }

}
