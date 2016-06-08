import { Component, OnInit } from '@angular/core';
import { MeteocatService } from './meteocat.service';

@Component({
  selector: 'ajax-demo',
  template: `
    <div *ngFor="let item of data"> 
      {{item.codi}} : {{item.nom}}
    </div>
  `
})
export class AjaxDemoComponent implements OnInit {

  data: String[] = [];
  
  constructor(
    private meteocatService: MeteocatService
   ){}
  
  getDataFromMeteocat() {
    this.meteocatService.getData().then(
      data => this.data = data
     );
  }
  
  ngOnInit() {
    this.getDataFromMeteocat();
  }
}