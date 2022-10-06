import { Component, OnInit } from '@angular/core';
import { BobToursService } from 'src/app/services/bob-tours.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  tours: any;

  constructor(private btService: BobToursService) { }

  ngOnInit() {
    this.tours = this.btService.tours;
  }

}
