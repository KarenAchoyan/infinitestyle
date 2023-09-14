import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class DistanceCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      distance: null,
    };
  }

  calculateDistance = () => {
    const { address1, address2 } = this.state;
    const { google } = this.props;

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address1 }, (results1, status1) => {
      if (status1 === 'OK') {
        const location1 = results1[0].geometry.location;

        geocoder.geocode({ address: address2 }, (results2, status2) => {
          if (status2 === 'OK') {
            const location2 = results2[0].geometry.location;

            const distance = google.maps.geometry.spherical.computeDistanceBetween(
              location1,
              location2
            );

            this.setState({ distance: (distance / 1000).toFixed(2) + ' km' });
          } else {
            console.error('Geocode was not successful for the second address:', status2);
          }
        });
      } else {
        console.error('Geocode was not successful for the first address:', status1);
      }
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First Address"
          onChange={(e) => this.setState({ address1: e.target.value })}
        />
        <input
          type="text"
          placeholder="Second Address"
          onChange={(e) => this.setState({ address2: e.target.value })}
        />
        <button onClick={this.calculateDistance}>Calculate Distance</button>
        <p>Distance: {this.state.distance}</p>

        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center (San Francisco)
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY', // Replace with your actual API key
})(DistanceCalculator);
