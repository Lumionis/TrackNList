import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SearchPage } from '../search/search';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list : Boolean;
  test : String;
  user : String;
  source : String;
  music: Array<any>
  // music =[
  //   {
  //     titre: 'khapta',
  //     album: 'En Esprit',
  //     artiste: 'Heuss l\'enfoiré',
  //     image: 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F3d67323ac039e1363d6cd29de0d997c8.649x649x1.gif'
  //   },
  //   {
  //     titre: 'PGP',
  //     album: 'PgP',
  //     artiste: 'Booba',
  //     image: 'https://www.raprnb.com/wp-content/uploads/2019/01/VISU-LYRICS-booba-pgp.jpg'
  //   },
  //   {
  //     titre: 'Trop Beau',
  //     album: 'Jeannine',
  //     artiste: 'Lomepal',
  //     image: 'http://www.handsandarms.com/15238-19334-large_default/lomepal-lpx2-jeannine.jpg'
  //   }
  // ]


  constructor(public navCtrl: NavController, public musicProvider: MusicProvider) {

    this.list = false;
    this.test = "Soirée YDay";
    this.user = "Florian";
    this.source = "../../assets/imgs/smog.jpg";
    this.music = []
  }


  ngOnInit() {
    this.listMusicChange();    
    this.musicProvider.musicChanged.subscribe((_) => {
      this.listMusicChange();
    })
  }

  listMusicChange() {
    console.log(this.music)
    this.music = this.musicProvider.playlistMusics
    if (this.music) {
      this.list = true;
    } else {
      this.list = false;
    }
    
  }
  
  navigate(root){
    console.log(root);

    switch (root) {
      case 'Search':
      console.log("Arrivé au case");
      this.navCtrl.push(SearchPage);
        
        break;
    
      default:
        break;
    }
  }
  

}
