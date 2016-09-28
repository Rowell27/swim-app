import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppHeader } from '../../xapi/template/app-header';
import { RegisterPage } from '../register/register';
@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [ AppHeader ]
})

export class HomePage {
  appTitle;
  constructor(public navCtrl: NavController) {
    this.appTitle = 'Home';
  }
  onClickRegister() {
    this.navCtrl.push( RegisterPage );
  }
  ionViewLoaded() {
    //this.navCtrl.push( RegisterPage );
  }
}
