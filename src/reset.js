import React from 'react'
import './grid.css'

const Reset = (props) => {
    return (
        <button className='reset'
            onClick={props.resetGame}>Restart the Game</button>
    )
}

export default Reset