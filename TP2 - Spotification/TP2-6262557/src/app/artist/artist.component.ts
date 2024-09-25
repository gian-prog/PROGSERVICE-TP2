import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SpotifyService } from '../services/spotify-service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  artistName: string = ""
  artist?: Artist
  spotifyToken?: string;
  artists: Artist[] = []

  constructor(public spotify: SpotifyService){

  }
  ngOnInit(){
    this.spotify.connect()
  }

  async searchArtist(): Promise<void>{
    this.artists.push(await this.spotify.searchArtist(this.artistName))
  }

}
