import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../../pages/home/home";

/**
 * Generated class for the Teste component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'teste',
  templateUrl: 'teste.html'
})
export class Teste {

  text: string;

  constructor(public navParams: NavParams) {
    this.text = `${this.navParams.get('id')} ${this.navParams.get('name')}`;
  }

}
