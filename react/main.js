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
        <div className='main'>
          <ul>
            <li><Link to="/databindingdemo">Data Binding Demo</Link></li>
            <li><Link to="/multiplecomponentsdemo">Multiple Components Demo</Link></li>
            <li><Link to="/messages/2">Message 2</Link></li>
            <li><Link to="/messages/5">Message 5</Link></li>
            <li><Link to="/messages/1">Message 1</Link></li>
            <li><Link to="/leafletdemo">Leaflet Demo</Link></li>
            <li><Link to="/ajaxdemo">AJAX Demo</Link></li>
          </ul>
        </div>
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
      <Route path="leafletdemo" component={LeafletDemo}/> 
      <Route path="ajaxdemo" component={AjaxDemo}/>
    </Route>
  </Router>
), document.getElementById('app'));
