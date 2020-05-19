import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  constructor() { }

  async getCurrentPosition() {
    /*     const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current', coordinates); */
    return await Geolocation.getCurrentPosition();
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {

    })
  }

}
