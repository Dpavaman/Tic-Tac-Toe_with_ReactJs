import React, { useState } from 'react';
import Grid from './Grid';
import WinnerInfo from './WinnerInfo'
import Reset from './reset'
import './grid.css'

const App = (props) => {
    const [data, setData] = useState({
        winner: {
            name: undefined,
            indices: []
        },
        data: 'cross',
        positions: new Array(9).fill(null)
    })


    const resetGame = () => {
        setData({
            winner: {
                name: undefined,
                indices: []
            },
            data: 'cross',
            positions: new Array(9).fill(null)
        })
    }

    console.log(data);
    return (
        <>
            <h1 className='header'>Tic-Tac-Toe</h1>
            {data.winner.name ? <WinnerInfo winner={data.winner.name} /> : null}
            <Grid
                winningIndices={data.winner.indices}
                positions={data.positions}
                setPositions={(index) => {
                    setData(prevData => {
                        if (!prevData.positions[index] && !prevData.winner.name) {
                            const data = { ...prevData }
                            data.positions[index] = data.turn
                            const lines = [
                                [0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8],
                                [0, 4, 8],
                                [2, 4, 6]
                            ]
                            lines.forEach(line => {
                                const [a, b, c] = line
                                if (data.positions[a] &&
                                    data.positions[a] === data.positions[b] &&
                                    data.positions[a] === data.positions[c]) {
                                    data.winner.name = data.turn
                                    data.winner.indices = line
                                }
                            })
                            data.turn = (data.turn === 'circle') ? 'cross' : 'circle'
                            return data
                        } else {
                            return prevData;
                        }
                    })
                }} />

            <Reset resetGame={resetGame} />
        </>
    )
}

export default App