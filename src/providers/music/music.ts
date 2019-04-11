import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicProvider {

  playlistMusics: Array<any>;
  musicChanged: Subject<any>
  constructor() {
    this.playlistMusics = [];
    console.log('Hello MusicProvider Provider');
    this.musicChanged = new Subject<any>();
  }

  addMusic(music) : void{
    console.log(music)
    this.playlistMusics.push(music);
    this.musicChanged.next();
  }


}
