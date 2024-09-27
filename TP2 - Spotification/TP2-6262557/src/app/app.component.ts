import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP2-6262557';
  language : string = "fr"

  constructor(public  translate : TranslateService) {
    this.translate.setDefaultLang(this.language)
  }
  changeLanguage():void{

    this.translate.use(this.language)
  }
}
