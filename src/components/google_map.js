import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				// lng comes from google maps, lon is a property of the weather data we're pulling in, hence the discrepancy
				lng: this.props.lon
			}
		});
	}

	render() {
		return <div ref="map" />; // this.refs.map
	}
}

export default GoogleMap;