import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = [{title: 'Aladin'}, {title: 'Anna'}, {title: 'John Wick3'}];
}
