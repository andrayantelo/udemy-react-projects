import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';

class App extends React.Component {
    state = {lat: null, errorMessage: ""}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
          )
    }

    componentDidUpdate() {
        console.log("My component was just updated.")
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else {
            return <Spinner message="Please accept location request"/>
        }
    }
    
    render() {
       return (
           <div>
               {this.renderContent()}
            </div>)
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)