import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  test : String;
  user : String;
  source : String;

  music =[
    {
      titre: 'khapta',
      album: 'En Esprit',
      artiste: 'Heuss l\'enfoiré',
      image: 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F3d67323ac039e1363d6cd29de0d997c8.649x649x1.gif'
    },
    {
      titre: 'PGP',
      album: 'PgP',
      artiste: 'Booba',
      image: 'https://www.raprnb.com/wp-content/uploads/2019/01/VISU-LYRICS-booba-pgp.jpg'
    },
    {
      titre: 'Trop Beau',
      album: 'Jeannine',
      artiste: 'Lomepal',
      image: 'http://www.handsandarms.com/15238-19334-large_default/lomepal-lpx2-jeannine.jpg'
    }
  ]


  constructor(public navCtrl: NavController) {

    this.test = "Nom de la playlist";
    this.user = "Florian ";
    this.source = "../../assets/imgs/smog.jpg";
  }

}
