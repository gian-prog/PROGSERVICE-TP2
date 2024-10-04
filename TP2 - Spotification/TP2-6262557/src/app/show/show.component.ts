import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { Artist } from '../models/artist';
import { CommonModule } from '@angular/common';
import { BandsInTownService } from '../services/bandsInTownService'
import { Show } from '../models/show';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {


  artistName: string | null = null

  shows: Show[] = []

  language: string = "fr"

  constructor(public translate: TranslateService, public route: ActivatedRoute, public http: HttpClient, private bandsInTownService: BandsInTownService) {
    this.translate.setDefaultLang(this.language)
  }

  ngOnInit(): void {
    this.artistName = this.route.snapshot.paramMap.get("artistName")
    if (this.artistName != null) {
      this.getShows(this.artistName)
    }

  }

  async getShows(artistName: string): Promise<void> {
    try {
      this.shows = await this.bandsInTownService.getShows(artistName);
      if (this.shows.length === 0) {
        console.log('No events found for this artist.');
      }
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  }
}


