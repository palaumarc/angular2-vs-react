const LeafletDemo = React.createClass({

    componentDidMount: function() {

      //Create the map
      var mymap = this.mymap = L.map('mapid').setView([41.38339155, 2.13980198], 16);

      //Set the tile layer
      L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}
        ).addTo(mymap);

      //Add a marker at MeteoCat
      var marker = L.marker([41.38339155, 2.13980198]).addTo(mymap);

      //Add a new marker on click
      mymap.on('click', function(e) {
          console.log('Adding a new marker in: ' + e.latlng.lat + ' - ' + e.latlng.lng);
          L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
      });
      
    },
    componentWillUnmount: function() {
        this.mymap.off('click');
        this.mymap = null;
    },
    render: function() {
        return (
          <div id="mapid"></div>
        );
    }
});

window.LeafletDemo = LeafletDemo;
