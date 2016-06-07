const DataBindingDemo = React.createClass({
  getInitialState: function(){
    return {
      name: 'Paco'
    }
  },
  handleChange: function(event) {
    this.setState({ 
      name: event.target.value 
    })
  },
  render: function(){
    var message = '';;
    if (this.state.name !== '') {
      message = "Hello " + this.state.name;
    } 
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <h3> {message} </h3>
      </div>
    )
  }
});

window.DataBindingDemo = DataBindingDemo;