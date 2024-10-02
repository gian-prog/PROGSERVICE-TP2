import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, TranslateModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  artistName: string | null = null

  language : string = "fr"

  constructor(public  translate : TranslateService, public route: ActivatedRoute) {
    this.translate.setDefaultLang(this.language)
  }

  ngOnInit(): void{
    this.artistName = this.route.snapshot.paramMap.get("artistName")
  }

}
