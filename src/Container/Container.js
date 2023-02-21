import React from 'react'
import './Container.css'
import Card from '../Card/Card'

const Container = ({ress}) => {

    const existingRes = ress.map(res => 
        <Card 
            key={res.id}
            id={res.id}
            name={res.name}
            date={res.date}
            time={res.time}
            number={res.number}
        />
    )

    return (
        <div className="container">
            {existingRes}
        </div>
    )
}

export default Container;
