import { Component } from '@angular/core';
//import { BrowserDomAdapter } from 'angular2/platform/browser';

@Component({
  selector: 'LeafletDemoComponent',
  styleUrls: ['node_modules/leaflet/dist/leaflet.css', 'app/leaflet-demo.component.css'],
  template: `
        <h3>{{title}}</h3>
        <div id="LeafletDemoComponent" style="height: 600px;" ></div>
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

    var map = L.map('LeafletDemoComponent').setView([41.38339155, 2.13980198], 16);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(map);

    L.marker([41.38339155, 2.13980198]).addTo(map);

  }
}
