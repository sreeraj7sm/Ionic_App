import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { ImageinfoPage } from '../imageinfo/imageinfo';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  added:boolean=false;
  notAdded:boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  cart(){
    this.navCtrl.push(CartPage);
  }
  imageinfo(){
    let modal=this.modalCtrl.create(ImageinfoPage);
    modal.present();
  }
  addCart(){
    if(this.added==false)
    {
      console.log("Added");
      this.added=true;
      this.notAdded=false;
    }
    else{
      console.log("Removed")
      this.added=false;
      this.notAdded=true;
    }
  }
}
