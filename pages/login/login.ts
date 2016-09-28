import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginTemplate } from '../../xapi/template/login';
import * as x from '../../xapi/all';
@Component({
  templateUrl: 'build/pages/login/login.html',
  directives: [ x.AppHeader, LoginTemplate ],
  providers: [ x.Xapi ]
})
export class LoginPage {
  appTitle = "Login";
  loading: boolean = false;
  errorMessage: string = '';
  @ViewChild('Login') login: LoginTemplate;
  constructor(
    private navCtrl: NavController,
    private api: x.Xapi
    ) {
    console.log("LoginPage::constrcutor()");
  }
  ionViewLoaded() {
    this.login.t.Login = "Login Now";
    this.login.t.Cancel = "Cancel ..";
  }
  onBeforeRequest() {
    console.log("onBeforeRequest()");
    this.loading = true;
    this.errorMessage = '';
  }
  onAfterRequest() {
    console.log("onAfterRequest()");
    this.loading = false;
  }
  onSuccess( user: x.UserData) {
    console.log("onSuccess()");
    this.api.alert("LOGIN OK", `Welcome, ${user.user_login}. You have logged in.`);
    this.navCtrl.pop();
  }
  onError( message ) {
    console.log("onError()");
    this.errorMessage = message;
  }
  onCancel() {
    console.log("onCancel()");
    this.navCtrl.pop();
  }
}