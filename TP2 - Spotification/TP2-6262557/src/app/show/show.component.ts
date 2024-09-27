import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, TranslateModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  language : string = "fr"

  constructor(public  translate : TranslateService) {
    this.translate.setDefaultLang(this.language)
  }

}
