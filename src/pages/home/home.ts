import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  test : String;


  constructor(public navCtrl: NavController) {

    this.test = "Salut";
  }

}
