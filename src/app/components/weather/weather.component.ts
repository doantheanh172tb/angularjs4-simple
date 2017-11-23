import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [
    WeatherService
  ]
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  cityName = '';
  temp: null;
  isLoading = false;
  constructor(private weather: WeatherService) { }
  ngOnInit() { }

  getWeather() {
    this.isLoading = true;
    this.weather.getTemp(this.txtCityName)
      .then(res => {
        console.log(res);
        this.cityName = this.txtCityName;
        this.temp = res;
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
        alert('cannot find you city!')
        this.isLoading = false;
        this.cityName = '';
      });
  }

  getMessage() {
    if (this.isLoading) {
      console.log('Loading');
      return 'Loading..';
    }
    console.log('load');
    return this.cityName === '' ? 'Enter your city' : (this.cityName + ' is now ' + this.temp);
  }

}
