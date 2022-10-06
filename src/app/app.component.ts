import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BobToursService } from './services/bob-tours.service';

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

  constructor(
    private platform: Platform,
    private btService: BobToursService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.btService.initialize();
    });
  }

  ngOnInit() { }
     

}
