import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Song } from '../models/song';
import { SpotifyService } from '../services/spotify-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  albumName: string | null = null
  albumId: string | null = null

  song?: Song;
  songs: Song[] = []

  language : string = "fr"
  constructor(public route: ActivatedRoute, public spotify: SpotifyService, public  translate : TranslateService) {     
    this.translate.setDefaultLang(this.language)
  }
  ngOnInit(): void {
    this.albumName = this.route.snapshot.paramMap.get("albumName")
    this.albumId = this.route.snapshot.paramMap.get("albumId")
    this.spotify.connect()
    this.getSong()
  }

  async getSong(): Promise<void> {
    this.songs = await this.spotify.getSongs(this.albumId)
  }
  

  
}
