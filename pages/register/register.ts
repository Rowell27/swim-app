import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppHeader } from '../../xapi/template/app-header';
import { RegisterTemplate } from '../../xapi/template/register';
import * as wi from '../../xapi/interface/wordpress';
import { Language } from '../../xapi/service/language';
@Component({
  templateUrl: 'build/pages/register/register.html',
  directives: [ AppHeader, RegisterTemplate ]
})

export class RegisterPage {
  @ViewChild('Register') register: RegisterTemplate;
  private appTitle: string = '';
  private loading: boolean = false;
  private errorMessage: string = '';
  constructor(public navCtrl: NavController) {
    this.appTitle = 'Home';
  }
  ionViewLoaded() {
    let register = this.register;
    let t = register.t;
    t.User_ID = '회원 아이디';
    t.Password = '비밀번호';
    t.Name = '이름';
    t.Email = "이메일";
    t.Mobile = "휴대폰 번호";
    t.Birthday = "생년월일";
    t.Gender = "성별";
    t.Register = "가입";
    t.Cancel = "취소";
  }
  onBeforeRegister( r: RegisterTemplate ) {
    console.log("HomePage::onBeforeRegister()");
    console.log( r.t );
    this.loading = true;
  }

  onCancel( r: RegisterTemplate ) {
    console.log("HomePage::onCancel()");
    console.log( r.t );
    this.navCtrl.pop();
  }
  onError( msg: string ) {
    console.log("onError() ", msg );
    this.loading = false;
    let ln = new Language();
    this.errorMessage = ln.korean(msg);
  }
  onSuccess( user: wi.UserData ) {
    console.log("onSuccess() ", user );
    this.loading = false;
  }
}

