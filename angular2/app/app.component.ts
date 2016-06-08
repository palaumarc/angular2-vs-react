import { Component } from '@angular/core';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { MultipleComponentsDemoComponent } from './multiple-components-demo.component';
import { MessageComponent } from './message.component'
import { AjaxDemoComponent } from './ajax-demo.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MeteocatService } from './meteocat.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <button><a [routerLink]="['DataBindingDemo']">Data Binding Demo</a></button>
      <button><a [routerLink]="['MultipleComponentsDemo']">Multiple Component Demo</a></button>
      <button><a [routerLink]="['Message', {id:2}]">Message 2</a></button>
      <button><a [routerLink]="['Message', {id:5}]">Message 5</a></button>
      <button><a [routerLink]="['Message', {id:1}]">Message 1</a></button>
      <button><a [routerLink]="['AjaxDemo']">AJAX Demo</a></button>
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
    path: '/ajaxdemo',
    name: 'AjaxDemo',
    component: AjaxDemoComponent
  }
])
export class AppComponent {
  title = 'Angular2 Demos';
}