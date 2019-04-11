import { Component, Input } from '@angular/core';
import { MusicProvider } from '../../providers/music/music';

/**
 * Generated class for the MusicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'music',
  templateUrl: 'music.html'
})

export class MusicComponent {
  @Input()
  music: any;
  
  text: string;

  constructor(public musicProvider: MusicProvider) {
    console.log('Hello MusicComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit()
  {
    console.log(this.music)
  }

}
