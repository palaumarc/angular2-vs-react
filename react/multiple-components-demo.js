// Main container that holds real state
var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Tyler McGinnis',
      friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen'],
    }
  },
  addFriend: function(friend){
    this.state.friends.push(friend);
    this.setState({
      friends: this.state.friends
    });
  },
  removeFriend: function(indexOfFriendToRemove) {
    this.state.friends.splice(indexOfFriendToRemove,1);
    this.setState({
      friends: this.state.friends
    });
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriendDialog addNew={this.addFriend} />
        <List items={this.state.friends} removeItem={this.removeFriend} />
      </div>
    )
  }
});

// Stateless component used to add items to the list
var AddFriendDialog = React.createClass({
  getInitialState: function(){
    return {
      newFriend: ''
    }
  },
  updateNewFriend: function(e){
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
          <button onClick={this.handleAddNew}> Add Friend </button>
        </div>
    );
  }
});

// Stateless component used to visualize the list (which is past via props from its parent)
var List = React.createClass({
  handleRemoveItem: function(indexOfItemToRemove) {
    this.props.removeItem(indexOfItemToRemove);
  },
  render: function(){
    var listItems = this.props.items.map (
      (item,index) => (
          <li key={index}> {item} 
            <button onClick={this.handleRemoveItem.bind(null, index)}> Remove </button>
          </li>
        )
      );
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

window.FriendsContainer = FriendsContainer;