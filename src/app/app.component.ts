import { Component,ViewChild } from '@angular/core';
import { NavController, Platform,Nav,ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { BalancePage } from '../pages/balance/balance';
import { AddmoneyPage } from '../pages/addmoney/addmoney';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public toastCtrl:ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  profile(){
    this.nav.push(ProfilePage);
  }
  balance(){
    this.nav.push(BalancePage);
  }
  addmoney(){
    this.nav.push(AddmoneyPage);
  }
  logout(){
    let toast=this.toastCtrl.create({
      message:"Logged out successfully",
      duration:3000
    })
    toast.present();
    this.nav.push(LoginPage);
    this.nav.setRoot(LoginPage);
  }
}

