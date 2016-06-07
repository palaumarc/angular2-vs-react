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
          <button><Link to="/ajaxdemo">AJAX Demo</Link></button>
        </nav>
        <br />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="databindingdemo" component={DataBindingDemo}/>
      <Route path="multiplecomponentsdemo" component={FriendsContainer}/>
      <Route path="messages/:id" component={MessagesDemo}/>
      <Route path="ajaxdemo" component={AjaxDemo}/>
    </Route>
  </Router>
), document.getElementById('app'));