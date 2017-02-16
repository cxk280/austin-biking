import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//This:
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

//and this:

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

//are equivalent. Use the latter in this app.

class AddressField extends Component {
  render() {
    return (
      <div>
        <form action={this.props.formAction}>
          {this.props.formLabel} <input type="text" name="fname"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

// class AustinTrails extends Component {
//   render() {
//     return (
//       <div>
//       </div>
//     )
//   }
// }

class GoogleMapsInitScript extends Component {
  render() {
    return (
      <div>
        const initScript = document.createElement("script");

        initScript.innerHTML = "let map;
            function initMap() {
              map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 30.3074624, lng: -98.0336022},
                zoom: 8
              })
            }"

        document.body.appendChild(script);
      </div>
    )
  }
}

class GoogleMapsSrcScript extends Component {
  render() {
    return (
      <div>
        const SrcScript = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + "&callback=initMap";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
      </div>
    )
  }
}

class GoogleMaps extends Component {
  render() {
    return (
      <div id="map">
        <GoogleMapsInitScript />
        <GoogleMapsSrcScript />
      </div>
    )
  }
}

//Add the following to a CSS sheet eventually:
// #map {
//         height: 100%;
//       }



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Be an Austin Biker</h2>
        </div>
        <p className="App-intro">
          Austin, Texas has many wonderful urban trails perfect for biking. Enter your current location below and we'll find the trail nearest you.
        </p>
        <AddressField formAction="#" formLabel="Address: " />
        <br />
        <br />
        <GoogleMaps />
      </div>
    );
  }
}

export default App;
