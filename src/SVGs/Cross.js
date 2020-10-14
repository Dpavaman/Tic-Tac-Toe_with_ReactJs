import React from 'react'

const Cross = (props) => {
    const size = props.size || 100
    return (
        <svg width={size} height={size} viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L26 26L78 78M78 5L5 78" stroke="black" strokeWidth="10" strokeLinecap="round" />
        </svg>
    )
}

export default Cross