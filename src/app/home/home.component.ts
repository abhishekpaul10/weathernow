import { Component, OnInit } from '@angular/core';
import { LocationserverService } from '../services/locationserver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public lat: number;
  public lon: number;
  temperature: number;
  location: String;
  country: String;
  desc: String;
  tempMin: number;
  tempMax: number;
  humidity: number;
  url: String;

  constructor(private locationServerService: LocationserverService) {
    console.log('cons running...');
   }

  ngOnInit() {
    console.log('init running...');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

        this.locationServerService.getWeather(this.lat, this.lon).subscribe((loc) => {
          console.log(loc);
          this.temperature = Math.round(loc.main.temp - 273);
          this.location = loc.name;
          this.country = loc.sys.country;
          this.desc = loc.weather[0].main;
          this.tempMax = Math.round(loc.main.temp_max - 273);
          this.tempMin = Math.round(loc.main.temp_min - 273);
          this.humidity = loc.main.humidity;
          this.url = 'https://www.accuweather.com/en/'+this.country+'/'+this.country+'-weather';
        })
      });
    }
  }
}