import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { ProfilePage } from '../pages/profile/profile';
import { BalancePage } from '../pages/balance/balance';
import { ImageinfoPage } from '../pages/imageinfo/imageinfo';
import { AddmoneyPage } from '../pages/addmoney/addmoney';
import { LogprovProvider } from '../providers/logprov/logprov';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    CartPage,
    ProfilePage,
    BalancePage,
    ImageinfoPage,
    AddmoneyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    CartPage,
    ProfilePage,
    BalancePage,
    ImageinfoPage,
    AddmoneyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogprovProvider
  ]
})
export class AppModule {}
