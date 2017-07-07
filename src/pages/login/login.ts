import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Auth} from "../../providers/auth";
import {HomePage} from "../home/home";
import {Teste} from "../../components/teste/teste";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    email: 'admin@user.com',
    password: 'secret'
  };

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public toastController: ToastController,
              public navParams: NavParams,
              private auth: Auth) {
      this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
  }

  login(){
    this.auth.login(this.user)
        .then(() => {
          this.afterLogin();
        })
        .catch(() => {
            let toast = this.toastController.create({
                message: 'E-mail e/ou senha inválidos',
                duration: 3000,
                position: 'top',
                cssClass: 'toast-login-error'
            });
            toast.present();
        })
    /*this.jwtCliente.
      accessToken({email: this.email, password: this.password})
        .then((token) => {
          console.log(token);
        });*/
  }

  irParaHome(){
      this.navCtrl.push(Teste,{id:10,name:'Matheus'});
  }

  afterLogin(){
      this.menuCtrl.enable(true);
      this.navCtrl.push(HomePage);
  }

}
