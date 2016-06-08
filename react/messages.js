const MessagesDemo = React.createClass({
  render: function() {
    return (
      <div>
        We have message {this.props.params.id}. The ID has been magically given by the router!!
      </div>
    )
  }
})

window.MessagesDemo = MessagesDemo;
