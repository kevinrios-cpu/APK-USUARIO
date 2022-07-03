import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = environment.mapboxKey
      const map = new mapboxgl.Map({
    container: 'mapa-mapbox', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-70.7546298, -33.5114161], // starting position [lng, lat]
    zoom: 16 // starting zoom
});
    
  }

}
