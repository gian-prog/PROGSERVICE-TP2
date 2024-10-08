import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SpotifyService } from '../services/spotify-service';
import { Artist } from '../models/artist';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  artistName: string = ""
  artist?: Artist
  spotifyToken?: string;
  artists: Artist[] = []

  jsonData: string | null = null

  language : string = "fr";

  constructor(public spotify: SpotifyService, public  translate : TranslateService) {     
    this.translate.setDefaultLang(this.language)
  }
  ngOnInit() {
    this.spotify.connect()
    this.jsonData = localStorage.getItem("artist")
    if(this.jsonData != null){
      this.artists  = JSON.parse(this.jsonData)
    }
  }

  async searchArtist(): Promise<void> {
    this.artists.push(await this.spotify.searchArtist(this.artistName))
    this.saveArtist()
  }
  saveArtist(){
    localStorage.setItem ("artist", JSON.stringify(this.artists))
  }
}
