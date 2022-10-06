import { Component, OnInit } from '@angular/core';
import { BobToursService } from 'src/app/services/bob-tours.service';


@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {

  regions: any;

  constructor(private btService: BobToursService) { }


  ngOnInit() {
    this.btService.getRegions()
    .then(data => this.regions= data)
  }

}
