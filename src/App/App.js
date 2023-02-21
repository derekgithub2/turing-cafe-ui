import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container'
import { getReservationData } from '../apiCalls';

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    }
  }

  componentDidMount() {
    getReservationData()
    .then((data => this.setState({reservations: data})))
    .catch(error => this.setState({error: `${error}`}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Container reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
