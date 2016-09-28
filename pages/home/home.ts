import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as x from '../../xapi/all';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [ x.AppHeader ],
  providers: [ x.Xapi ]
})

export class HomePage {
  private appTitle;
  private user: x.UserData;
  constructor(
    public navCtrl: NavController,
    private api: x.Xapi
    ) {
    this.appTitle = 'Swimming 3';
    this.api.getLoginData( x => this.userLoggedIn( x ) );
  }
  userLoggedIn( user: x.UserData ) {
    this.user = user;
  }
  ionViewLoaded() {
    console.log("HomePage::ionViewLoaded()");
    //this.navCtrl.push( RegisterPage );
    //this.navCtrl.push( LoginPage );
  }
  onClickRegister() {
    this.navCtrl.push( RegisterPage );
  }
  onClickLogin() {
    this.navCtrl.push( LoginPage );
  }
}
