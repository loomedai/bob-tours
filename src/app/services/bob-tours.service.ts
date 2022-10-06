import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  public regions: any;

  baseUrl = 'https://bob-tours-c242a-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http:HttpClient) { }

  initialize() {
    this.getRegions()
    .then(data => this.regions = data);
  }

  getRegions(){
    let requestUrl = `${this.baseUrl}/Regions.json`;
    return this.http.get(requestUrl).toPromise();
  }
}
