import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,                 // ← required in v19
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }