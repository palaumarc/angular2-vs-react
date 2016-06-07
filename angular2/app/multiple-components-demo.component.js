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
var AddFriendDialog = (function () {
    function AddFriendDialog() {
        this.newFriend = '';
    }
    AddFriendDialog.prototype.handleAddNew = function () {
        this.addNew(this.newFriend);
        this.newFriend = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], AddFriendDialog.prototype, "addNew", void 0);
    AddFriendDialog = __decorate([
        core_1.Component({
            selector: 'add-friend-dialog',
            template: "\n   <div>\n    <input type=\"text\" [(ngModel)]=\"newFriend\" />\n    <button (click)=handleAddNew()> Add Friend </button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AddFriendDialog);
    return AddFriendDialog;
}());
exports.AddFriendDialog = AddFriendDialog;
var List = (function () {
    function List() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], List.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], List.prototype, "removeItem", void 0);
    List = __decorate([
        core_1.Component({
            selector: 'list',
            template: "\n    <h3> Friends </h3>\n    <ul>\n      <li *ngFor=\"let item of items; let i = index\"> \n        {{item}} \n        <button (click)=removeItem(i)> Remove </button>\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], List);
    return List;
}());
exports.List = List;
var MultipleComponentsDemoComponent = (function () {
    function MultipleComponentsDemoComponent() {
        var _this = this;
        this.name = 'Tyler McGinnis';
        this.friends = ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen'];
        this.addFriend = function (newFriend) {
            _this.friends.push(newFriend);
        };
        this.removeFriend = function (index) {
            _this.friends.splice(index, 1);
        };
    }
    MultipleComponentsDemoComponent = __decorate([
        core_1.Component({
            selector: 'multiple-components',
            template: "\n    <div>\n      <h3>Name: {{name}} </h3>\n      <add-friend-dialog [addNew]=\"addFriend\"> </add-friend-dialog>\n      <list [items]=\"friends\" [removeItem]=\"removeFriend\"> </list>\n    </div>\n  ",
            directives: [AddFriendDialog, List]
        }), 
        __metadata('design:paramtypes', [])
    ], MultipleComponentsDemoComponent);
    return MultipleComponentsDemoComponent;
}());
exports.MultipleComponentsDemoComponent = MultipleComponentsDemoComponent;
//# sourceMappingURL=multiple-components-demo.component.js.map