import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()

export class WeatherService {
    constructor(private http: Http) { }

    getTemp(city: String) {
        const Url = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=1974b7c0ef88f86bc224be4951147ddf&q=";
        return this.http.get(Url + city)
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson.main.temp)
            .catch(err => console.log(err));
    }
}