import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { HomePage } from '../home/home';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  titre: any;
  artiste: any;
  retourAPI: any;
  music: any;

  constructor(public navCtrl: NavController, public musicProvider: MusicProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(){
    try {
      //Connexion API
      this.retourAPI = "6";

      this.music =[
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
      
    } catch (error) {
      
      alert("La recherche à échoué"+ " : " + this.titre + this.artiste);
      console.log(error);
    }
  }

  addMusic(i){
    this.musicProvider.addMusic(this.music[i]);
    this.navCtrl.pop();
  }

  public navigate(root){
    console.log(root);

    switch (root) {
      
      case 'Home': 
      this.navCtrl.push(HomePage);
      break;
    
      default:
        break;
    }
  }
}
