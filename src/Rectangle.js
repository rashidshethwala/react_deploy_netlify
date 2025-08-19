import React from 'react'

const Rectangle = ({ colorValue }) => {
    return (
        <section className="rectangle" style={{ backgroundColor: colorValue }}>

            <p>{colorValue ? ` ${colorValue}` : 'Empty Value'}</p>

        </section>
    )
}

export default Rectangle
