const AjaxDemo = React.createClass({

  getInitialState: function(){
    return {
      httpResponseData: []
    }
  },

  componentDidMount: function() {
    // Note that fetch is not part of React, it is just an external library to manage HTTP
    fetch('http://10.116.12.245:8080/ApiRestInterna/xema/v1/mesurades/metadades/estacions')
      .then(response => {
        return response.text()
      }).then(body => {
        this.setState({ httpResponseData: JSON.parse(body) });
      });
  },

  render: function(){
    return (
      <AjaxDemoViewer data={this.state.httpResponseData} />
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