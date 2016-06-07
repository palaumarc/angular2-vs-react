import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-friend-dialog',
  template: `
   <div>
    <input type="text" [(ngModel)]="newFriend" />
    <button (click)=handleAddNew()> Add Friend </button>
  </div>
  `
})
export class AddFriendDialog {
  @Input() 
  addNew: Function;
  
  newFriend: String = '';

  handleAddNew() {
    this.addNew(this.newFriend);
    this.newFriend = '';
  }
}

@Component({
  selector: 'list',
  template: `
    <h3> Friends </h3>
    <ul>
      <li *ngFor="let item of items; let i = index"> 
        {{item}} 
        <button (click)=removeItem(i)> Remove </button>
      </li>
    </ul>
  `
})
export class List {
  @Input()
  items: String[];

  @Input()
  removeItem: Function;
}

@Component({
  selector: 'multiple-components',
  template: `
    <div>
      <h3>Name: {{name}} </h3>
      <add-friend-dialog [addNew]="addFriend"> </add-friend-dialog>
      <list [items]="friends" [removeItem]="removeFriend"> </list>
    </div>
  `,
  directives: [AddFriendDialog, List]
})
export class MultipleComponentsDemoComponent {
  name: String = 'Tyler McGinnis';
  friends: String[] = ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen'];

  addFriend = (newFriend: String) => {
    this.friends.push(newFriend);
  }

  removeFriend = (index: number) => {
    this.friends.splice(index,1);
  }
}

