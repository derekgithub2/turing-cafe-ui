import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({name, date, time, number}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
            <button className="cancel-button">Cancel</button>
        </div>
    )
}

export default Card;

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    number: PropTypes.number,
}