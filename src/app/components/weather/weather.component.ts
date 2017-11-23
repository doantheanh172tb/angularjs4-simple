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
  constructor(private weather: WeatherService) { }
  ngOnInit() { }

  getWeather() {
    this.weather.getTemp(this.txtCityName)
      .then(res => {
        console.log(res);
        this.cityName = this.txtCityName;
        this.temp = res;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
