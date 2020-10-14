import React from 'react'
import './grid.css'
import Circle from './SVGs/circle';
import Cross from './SVGs/Cross'

const renderSVG = (svg) => {
    if (svg === 'circle') {
        return <Circle size={40} />
    } else if (svg === 'cross') {
        return <Cross size={40} />
    } else {
        return null
    }
}

const Grid = (props) => {
    const divisions = props.positions.map((value, index) => {
        const isWinningIndex = props.winningIndices.includes(index)
        return (
            <div
                className={isWinningIndex ? 'winner' : null}
                key={index}
                onClick={() => {
                    props.setPositions(index)
                }} >
                {renderSVG(value)}
            </div>
        )
    })
    return (
        <div className='container' >
            {divisions}
        </div>

    )
}

export default Grid