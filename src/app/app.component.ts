import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Favorites', url: '/favorites', icon: 'star' },
    { title: 'Regions', url: '/regions', icon: 'image' },
    { title: 'Tour Types', url: '/tour-types', icon: 'bus' },
  ];
}
