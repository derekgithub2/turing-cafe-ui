import React from 'react'
import './Container.css'
import Card from '../Card/Card'

const Container = ({reservations}) => {

    // want to use data from api here to iterate through and return the cards for each reservation data point

    const existingRes = reservations.forEach(res => {
        return (
            <Card 
                id={res.id}
                name={res.name}
                date={res.date}
                time={res.time}
                number={res.number}
            />
        )
    })

    return (
        <div>
            {existingRes}
        </div>
    )
}

export default Container;