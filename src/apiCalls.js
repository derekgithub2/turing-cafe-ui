const url = 'http://localhost:3001/api/v1/reservations'

const getReservationData = () => {
    return fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('response not ok')
        }
        return res.json()
    })
}

export { getReservationData }