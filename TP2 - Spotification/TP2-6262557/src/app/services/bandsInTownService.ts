import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, lastValueFrom } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
    providedIn: 'root'
})
export class BandsInTownService {
    private bandInTownToken: string = "2b32475766802ac01eefda45e9e42ea0";
    private apiUrl: string = "https://rest.bandsintown.com/artists";

    constructor(private http: HttpClient) { }

    async getShows(artistName: string): Promise<Show[]> {

        let x = await lastValueFrom(this.http.get<any>(`${this.apiUrl}/${artistName}/events?app_id=${this.bandInTownToken}`))
        let shows: Show[] = [];
        for (let i = 0; i < x.length; i++) {
            shows.push(new Show(x[i].venue.latitude, x[i].venue.longitude, x[i].venue.country, x[i].venue.city, x[i].datetime));
        }

        return shows

    }
}