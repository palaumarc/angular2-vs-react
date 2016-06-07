import { Component } from '@angular/core';
import { RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'message',
  template: `
   <div>
     We have message {{messageId}}. The ID has been magically given by the router!!
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  ]
})
export class MessageComponent {
  messageId: string;

  constructor(params: RouteParams) {
    this.messageId = params.get('id');
  }
}