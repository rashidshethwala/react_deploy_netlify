import React from 'react'
import { useState } from 'react';

const SelectColor = () => {

    const [color, setColor] = useState('');


    return (
        <div>

            <div className="square" style={{ backgroundColor: color }}>
                <label htmlFor="itemColor" style={{ color: 'black', fontWeight: 'bold' }}>
                    {color ? ` ${color}` : ''}
                </label>
            </div>
            <input
                type="text"
                id="itemColor"
                placeholder='Enter Color...'
                style={{ width: '200px', height: '30px', margin: '10px 0' }}
                onChange={(e) => setColor(e.target.value)}

            />
        </div>
    )
}

export default SelectColor
