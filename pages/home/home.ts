import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppHeader } from '../../xapi/template/app-header';
import { RegisterTemplate } from '../../xapi/template/register';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [ AppHeader, RegisterTemplate ]
})

export class HomePage {
  @ViewChild('Register') register: RegisterTemplate;
  private appTitle: string = '';
  constructor(public navCtrl: NavController) {
    this.appTitle = 'Home';
  }
  ionViewLoaded() {
    let t = this.register.t;
    t.User_ID = '회원 아이디';
    t.Password = '비밀번호';
    t.Email = "이메일";
    t.Mobile = "휴대폰 번호";
    t.Birthday = "생년월일";
    t.Gender = "성별";
  }
  onBeforeRegister( r: RegisterTemplate ) {
    console.log("HomePage::onBeforeRegister()");
    console.log( r.t );
  }
  onAfterRegister( r: RegisterTemplate ) {
    console.log("HomePage::onAfterRegister()");
    console.log( r.t );
  }

  onCancel( r: RegisterTemplate ) {
    console.log("HomePage::onCancel()");
    console.log( r.t );
  }
}
