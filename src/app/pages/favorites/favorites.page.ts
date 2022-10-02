import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  tours = [
    {ID:1, Title:'City walk'},
    {ID:2, Title:'On the trails of Beethoven'},
    {ID:3, Title:'Villa Hammerschmidt'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
