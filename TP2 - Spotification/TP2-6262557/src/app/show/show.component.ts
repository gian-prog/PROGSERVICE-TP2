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
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, TranslateModule, CommonModule, GoogleMapsModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {


  artistName: string | null = null

  shows: Show[] = []

  language: string = "fr"


  center: { lat: number; lng: number } = { lat: 0, lng: 0 };
  zoom: number = 2;


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
      else{        
        this.calculerCentre(this.shows);}
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  }

  calculerCentre(shows: Show[]): { lat: number; lng: number } {
    let totalLat = 0;
    let totalLng = 0;
    const count = shows.length;

    if (count === 0) {
      return { lat: 0, lng: 0 }; // Default return if no shows
    }

    for (const show of shows) {
      totalLat += parseFloat(show.lat);
      totalLng += parseFloat(show.long);
    }

    return {
      lat: totalLat / count, 
      lng: totalLng / count  
    };
  }

  toNumber(value: string): number {
    return parseFloat(value);
  }

}


