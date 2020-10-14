import React from 'react'
import './grid.css'

const WinnerInfo = (props) => {
    const winner = props.winner
    return (
        <h1 className='declare' >Player with the <span className='name'> {winner} </span> sign won the Game</h1>
    )
}

export default WinnerInfo