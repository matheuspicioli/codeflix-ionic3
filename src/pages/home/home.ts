import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {Teste} from "../../components/teste/teste";
import {Auth} from "../../decorators/auth.decorator";

@Auth()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController) {
    }

  irParaTeste(){
      this.navCtrl.push(Teste, {
        'mensagem': 'Visitou a página teste'
      });
  }
}
