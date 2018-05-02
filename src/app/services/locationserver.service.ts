import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomeComponent } from '../home/home.component';

@Injectable()
export class LocationserverService {
  apiKey = '5bef802b2feb0fa2d576e4e63476f15d';
  url;

  constructor(public http: Http) {
    console.log('service running...');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?';
   }

   getWeather(lat, lon) {
     return this.http.get(this.url+'lat='+lat+'&lon='+lon+'&appid='+this.apiKey)
      .map(res => res.json());
   }
}
