import React, { useState, useEffect } from 'react';
import './App.css';
import Container from '../Container/Container'
import { getReservationData } from '../apiCalls';
import Form from '../Form/Form'

function App() {
  const [reservations, setReservations] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getReservationData()
    .then(data => setReservations(data))
    .catch((error) => {setError(error.message)})
  }, [])

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
        { error !== '' ? error && <h2>There was an issue! {error}</h2> : <Container reservations={reservations}/>}
      </div>
    </div>
  )
}


export default App;
