import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Artist } from '../models/artist';

const CLIENT_ID : string = "2ba044aa38564f58bcb78f894f42d6ac";
const CLIENT_SECRET : string = "2908833300e6440485dcd7b9c9a55d7f";

@Injectable({
    providedIn: 'root'
  })
  export class SpotifyService{

    spotifyToken: string | null = null;


    constructor(public http: HttpClient) {}

    async connect(): Promise<void> {
        let body = new HttpParams().set('grant_type', 'client_credentials');
        let httpOptions = {
          headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
          })
        };
        let x = await lastValueFrom(this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), httpOptions));
        console.log(x);
        this.spotifyToken = x.access_token;
    }
    async searchArtist(artist : string): Promise<Artist> {
        const httpOptions = { headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + this.spotifyToken
        })};
        let x = await lastValueFrom(this.http.get<any>('https://api.spotify.com/v1/search?type=artist&offset=0&limit=1&q=' + artist, httpOptions));
        console.log(x);
        return new Artist(x.artists.items[0].id, x.artists.items[0].name, x.artists.items[0].images[0].url);
    }
}