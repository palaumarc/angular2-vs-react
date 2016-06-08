const LeafletDemo = React.createClass({
  getInitialState: function(){
    return {
      title: 'LeafletDemo'
    }
  },
  render: function(){
    return (
      <div>
        {this.state.title}
      </div>
    )
  }
});

window.LeafletDemo = LeafletDemo;
