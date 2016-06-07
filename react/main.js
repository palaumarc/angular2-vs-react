const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const Link = ReactRouter.Link;

const App = React.createClass({
   getInitialState: function(){
    return {
      title: 'ReactJS Demos'
    }
  },
  render: function() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <nav>
          <button><Link to="/databindingdemo">Data Binding Demo</Link></button>
          <button><Link to="/multiplecomponentsdemo">Multiple Components Demo</Link></button>
          <button><Link to="/messages/2">Message 2</Link></button>
          <button><Link to="/messages/5">Message 5</Link></button>
          <button><Link to="/messages/1">Message 1</Link></button>
        </nav>
        <br />
        {this.props.children}
      </div>
    )
  }
})

const NoMatch = React.createClass({
  render: function() {
    return (
      <div>
        This is NoMatch
      </div>
    )
  }
})

const Messages = React.createClass({
  render: function() {
    return (
      <div>
        We have message {this.props.params.id}. The ID has been magically given by the router!!
      </div>
    )
  }
})

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="databindingdemo" component={DataBindingDemo}/>
      <Route path="multiplecomponentsdemo" component={FriendsContainer}/>
      <Route path="messages/:id" component={Messages}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));