import { Component } from '@angular/core';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { MultipleComponentsDemoComponent } from './multiple-components-demo.component';
import { MessageComponent } from './message.component';
import { AjaxDemoComponent } from './ajax-demo.component'
import { LeafletDemoComponent } from './leaflet-demo.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MeteocatService } from './meteocat.service';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <ul>
        <li><a [routerLink]="['DataBindingDemo']">Data Binding Demo</a></li>
        <li><a [routerLink]="['MultipleComponentsDemo']">Multiple Component Demo</a></li>
        <li><a [routerLink]="['Message', {id:2}]">Message 2</a></li>
        <li><a [routerLink]="['Message', {id:5}]">Message 5</a></li>
        <li><a [routerLink]="['Message', {id:1}]">Message 1</a></li>
        <li><a [routerLink]="['LeafletDemo']">Leaflet</a></li>
        <li><a [routerLink]="['AjaxDemo']">AJAX Demo</a></li>
      </ul>
    </nav>
    <br />
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    MeteocatService
  ]
})
@RouteConfig([
  {
    path: '/databindingdemo',
    name: 'DataBindingDemo',
    component: DataBindingDemoComponent
  },
  {
    path: '/multiplecomponentsdemo',
    name: 'MultipleComponentsDemo',
    component: MultipleComponentsDemoComponent
  },
  {
    path: '/messages/:id',
    name: 'Message',
    component: MessageComponent
  },
  {
    path: '/leafletdemo',
    name: 'LeafletDemo',
    component: LeafletDemoComponent
  },
  {
    path: '/ajaxdemo',
    name: 'AjaxDemo',
    component: AjaxDemoComponent
  }
])
export class AppComponent {
  title = 'Angular2 Demos';
}
