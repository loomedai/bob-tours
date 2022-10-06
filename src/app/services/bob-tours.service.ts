import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  public regions: any;
  public tourtypes: any;
  public tours: any;
  baseUrl = 'https://bob-tours-c242a-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http:HttpClient) { }

  initialize() {
    this.getRegions()
    .then(data => this.regions = data);
    this.getTourtypes()
    .then(data  => this.tourtypes = _.sortBy(data, 'Name'));
    this.getTourtypes()
    .then(data => this.tours = _.sortBy(data, 'Title'));
  }

  getRegions() {
    let requestUrl = `${this.baseUrl}/Regions.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getTourtypes() {
    let requestUrl = `${this.baseUrl}/Tourtypes.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getTours() {
    let requestUrl =`${this.baseUrl}/Tours.json`;
    return this.http.get(requestUrl).toPromise();
  }
}
