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
var data_binding_demo_component_1 = require('./data-binding-demo.component');
var multiple_components_demo_component_1 = require('./multiple-components-demo.component');
var message_component_1 = require('./message.component');
var ajax_demo_component_1 = require('./ajax-demo.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var meteocat_service_1 = require('./meteocat.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular2 Demos';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <button><a [routerLink]=\"['DataBindingDemo']\">Data Binding Demo</a></button>\n      <button><a [routerLink]=\"['MultipleComponentsDemo']\">Multiple Component Demo</a></button>\n      <button><a [routerLink]=\"['Message', {id:2}]\">Message 2</a></button>\n      <button><a [routerLink]=\"['Message', {id:5}]\">Message 5</a></button>\n      <button><a [routerLink]=\"['Message', {id:1}]\">Message 1</a></button>\n      <button><a [routerLink]=\"['AjaxDemo']\">AJAX Demo</a></button>\n    </nav>\n    <br />\n    <router-outlet></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                meteocat_service_1.MeteocatService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/databindingdemo',
                name: 'DataBindingDemo',
                component: data_binding_demo_component_1.DataBindingDemoComponent
            },
            {
                path: '/multiplecomponentsdemo',
                name: 'MultipleComponentsDemo',
                component: multiple_components_demo_component_1.MultipleComponentsDemoComponent
            },
            {
                path: '/messages/:id',
                name: 'Message',
                component: message_component_1.MessageComponent
            },
            {
                path: '/ajaxdemo',
                name: 'AjaxDemo',
                component: ajax_demo_component_1.AjaxDemoComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map