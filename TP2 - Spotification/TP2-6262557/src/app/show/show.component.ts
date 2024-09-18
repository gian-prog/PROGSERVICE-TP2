import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

}
