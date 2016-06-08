const AjaxDemo = React.createClass({

  getInitialState: function(){
    return {
      data: []
    }
  },

  componentDidMount: function() {
    // - IMPORTANT: it is considered a good practice to execute the interactions with external
    //   services (such as REST APIs) at this point
    // - Note that fetch is not part of React, it is just an external library to manage HTTP.
    //   This method should be encapsulated in a Service to be reused elsewhere. As the way to
    //   do it strongly depends on the chosen architecture, it has not been done in this example.
    fetch('http://10.116.12.245:8080/ApiRestInterna/xema/v1/mesurades/metadades/estacions')
      .then(response => {
        return response.text()
      }).then(body => {
        this.setState({ httpResponseData: JSON.parse(body) });
      });
  },

  render: function(){
    return (
      <AjaxDemoViewer data={this.state.data} />
    )
  }
});

const AjaxDemoViewer = React.createClass({

  getDefaultProps: function() {
    return {
      data: []
    }
  },

  render: function() {

    var items = this.props.data.map (
        (item, index) => (
            <div key={index}>
              {item.codi} : {item.nom}
            </div>
          )
      );

    return (
      <div>
       {items}
      </div>
    )
  }
});

window.AjaxDemo = AjaxDemo;