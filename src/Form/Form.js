import React from 'react'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newResy = {
            id: Date.now(),
            name,
            date,
            time,
            guests
        }
        // console.log(newResy)
        props.addResy(newResy);
        clearInputs()
    }

    const clearInputs = () => {
        setMessage(`Your reservation has been made!`)
        setName('')
        setDate('')
        setTime('')
        setGuests('')
    }

    return (
        <div>
            <form className='form'
            onSubmit={handleSubmit}>
                <input
                    type='text' 
                    id='name'
                    placeholder='Name' 
                    name='name' 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required />
                <input
                    type='text'
                    placeholder='Date (mm/dd)' 
                    name='date' 
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required />
                <input 
                    type='text' 
                    placeholder='Time' 
                    name='time' 
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    required />
                <input 
                    type='text' 
                    placeholder='Number of guests' 
                    name='guests' 
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    required />
                <button type="submit" className='form-button'>Make Reservation</button>
            </form>
            <h2>{message}</h2>
        </div>
    )
}

export default Form;