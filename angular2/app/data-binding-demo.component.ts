import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  template: `
    <div>
      <input type="text" [(ngModel)]="name">
      <div *ngIf="name">
        <h3> Hello {{name}} </h3>
      </div>
    </div>
  `
})
export class DataBindingDemoComponent {
  name: String = 'Paco';
}