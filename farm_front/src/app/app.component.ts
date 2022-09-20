import { Component, ViewChild } from '@angular/core';
import { BasemapComponent } from './basemap/basemap.component';
import { FarmService } from './services/farm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('map') map!: BasemapComponent
}
