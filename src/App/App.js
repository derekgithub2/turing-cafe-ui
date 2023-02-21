import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container'
import { getReservationData } from '../apiCalls';
import Form from '../Form/Form'

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
    .catch(error => 
      this.setState({error: 'failed to get the data'}))
  }

  addResy(newResy) {
    this.setState({reservations: [...this.state.reservations, newResy]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addResy={this.addResy} props={this.state}/>
        </div>
        <div className='resy-container'>
          <Container reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
