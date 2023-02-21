import React, { useState, useEffect } from 'react';
import './App.css';
import Container from '../Container/Container'
import { getReservationData } from '../apiCalls';
import Form from '../Form/Form'

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    getReservationData()
    .then(data => setReservations(data))}, [])

  const addResy = (newResy) => {
    setReservations(newResy)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addResy={addResy} />
      </div>
      <div className='resy-container'>
        <Container reservations={reservations}/>
      </div>
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       reservations: [],
//       error: '',
//     }
//   }

//   componentDidMount() {
//     getReservationData()
//     .then((data => this.setState({reservations: data})))
//     .catch(error => 
//       this.setState({error: 'failed to get the data'}))
//   }

//   addResy(newResy) {
//     this.setState({reservations: [...this.state.reservations, newResy]})
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1 className='app-title'>Turing Cafe Reservations</h1>
//         <div className='resy-form'>
//           <Form addResy={this.addResy} props={this.state}/>
//         </div>
//         <div className='resy-container'>
//           <Container reservations={this.state.reservations}/>
//         </div>
//       </div>
//     )
//   }
// }

export default App;
