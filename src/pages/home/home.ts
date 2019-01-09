import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  test : String;
  user : String;


  constructor(public navCtrl: NavController) {

    this.test = "Nom de la playlist";
    this.user = "Nom du User ";
  }

}
