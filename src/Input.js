import React from 'react'

const Input = ({ colorValue, setColorValue, setHexValue }) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();

        }}>
            <label>Add Color Name:</label>
            <input
                autoFocus
                id='itemColor'
                placeholder='Enter Color...'
                required
                type="text"
                //value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                }}
            />

        </form>
    )
}

export default Input
