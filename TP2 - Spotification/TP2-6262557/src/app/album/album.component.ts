import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { SpotifyService } from '../services/spotify-service';
import { Album } from '../models/album';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {

  artistName: string | null = null
  artistId: string | null = null

  album?: Album;
  albums: Album[] = []

  constructor(public route: ActivatedRoute, public spotify: SpotifyService) { }
  ngOnInit(): void {
    this.artistName = this.route.snapshot.paramMap.get("artistName")
    this.artistId = this.route.snapshot.paramMap.get("artistId")
    this.spotify.connect()
    this.getAlbum()
  }

  async getAlbum(): Promise<void> {
    this.albums = await this.spotify.getAlbums(this.artistId)
  }



}
