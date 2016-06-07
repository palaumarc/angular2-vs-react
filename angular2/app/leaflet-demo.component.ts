import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  template: `
    <div>
      <h3> {{title}} </h3>
    </div>
  `
})
export class LeafletDemoComponent {
  title: String = 'Leaflet Demo';
}
