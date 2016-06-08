import { Component } from '@angular/core';
//import { BrowserDomAdapter } from 'angular2/platform/browser';

@Component({
  selector: 'LeafletDemoComponent',
  styleUrls: ['node_modules/leaflet/dist/leaflet.css', 'app/leaflet-demo.component.css'],
  template: `
        <h3>{{title}}</h3>
        <div id="LeafletDemoComponent" lf-center="center" height="480px" width="640px"></div>
  `,
  //providers: [BrowserDomAdapter],
})
export class LeafletDemoComponent{
  title: string;

  constructor(){
    this.title = 'Leaflet Demo Component';
  }

  ngOnInit() {
    this.paintMap();
  }

  paintMap = () => {
    var map = L.map('LeafletDemoComponent').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }
}
