import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SpotifyService } from '../services/spotify-service';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

}
