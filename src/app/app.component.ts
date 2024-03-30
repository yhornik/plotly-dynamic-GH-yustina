import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'streaming-data';


  constructor() {
  }

  ngOnInit() {
  }
}
