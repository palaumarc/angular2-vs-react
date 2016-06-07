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
var router_deprecated_1 = require('@angular/router-deprecated');
var MessageComponent = (function () {
    function MessageComponent(params) {
        this.messageId = params.get('id');
    }
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'message',
            template: "\n   <div>\n     We have message {{messageId}}. The ID has been magically given by the router!!\n  </div>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map