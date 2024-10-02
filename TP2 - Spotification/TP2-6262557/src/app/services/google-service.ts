import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

const googleApiKey = "AIzaSyDt7a58twsyouUYt3v4IYsV_fwoIPWE_2Q";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public http : HttpClient) { }

  async searchVideoId(searchText : string) : Promise<string>{
    let x = await lastValueFrom(this.http.get<any>("https://www.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1&key=" + googleApiKey + "&q=" + searchText));
    console.log(x);
    return x.items[0].id.videoId;
  }
}
