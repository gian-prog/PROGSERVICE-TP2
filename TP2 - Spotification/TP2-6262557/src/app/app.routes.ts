import { Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { ShowComponent } from './show/show.component';
import { SongComponent } from './song/song.component';

export const routes: Routes = [
    {path: "", redirectTo: "/artist", pathMatch:"full"},
    {path: "artist", component: ArtistComponent},
    {path: "album", component: AlbumComponent},
    {path: "show", component: ShowComponent},
    {path: "song", component: SongComponent}




];
