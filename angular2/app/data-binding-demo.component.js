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
var DataBindingDemoComponent = (function () {
    function DataBindingDemoComponent() {
        this.name = 'Paco';
    }
    DataBindingDemoComponent = __decorate([
        core_1.Component({
            selector: 'data-binding',
            template: "\n    <div>\n      <input type=\"text\" [(ngModel)]=\"name\">\n      <div *ngIf=\"name\">\n        <h3> Hello {{name}} </h3>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindingDemoComponent);
    return DataBindingDemoComponent;
}());
exports.DataBindingDemoComponent = DataBindingDemoComponent;
//# sourceMappingURL=data-binding-demo.component.js.map