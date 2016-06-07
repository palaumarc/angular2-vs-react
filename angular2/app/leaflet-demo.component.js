"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { BrowserDomAdapter } from 'angular2/platform/browser';
var LeafletDemoComponent = (function () {
    function LeafletDemoComponent() {
        this.paintMap = function () {
            var map = L.map('LeafletDemoComponent').setView([51.505, -0.09], 13);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        };
        this.title = 'Leaflet Demo Component';
    }
    LeafletDemoComponent.prototype.ngOnInit = function () {
        this.paintMap();
    };
    LeafletDemoComponent = __decorate([
        core_1.Component({
            selector: 'LeafletDemoComponent',
            styleUrls: ['node_modules/leaflet/dist/leaflet.css', 'app/leaflet-demo.component.css'],
            template: "\n        <h3>{{title}}</h3>\n        <div id=\"LeafletDemoComponent\" lf-center=\"center\" height=\"480px\" width=\"640px\"></div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], LeafletDemoComponent);
    return LeafletDemoComponent;
}());
exports.LeafletDemoComponent = LeafletDemoComponent;
//# sourceMappingURL=leaflet-demo.component.js.map