import React from 'react'
import { useState } from 'react';

import ListItem from './ListItem';

const Content = ({ items, handleCheck, handleDelete }) => {
    const [name, setName] = useState('Bob');
    const handleNameChanges = () => {
        console.log("Name changed");
        const names = ['Bob', 'Alice', 'Charlie'];
        const int = Math.floor(Math.random() * names.length);
        return setName(names[int]);
    }
    return (
        <>

            {items.length ? (

                /*}
                <button onClick={handleNameChanges}>Change Name</button>
                <p>Hello {name}</p>
                */
                <ListItem items={items} handleCheck={handleCheck} handleDelete={handleDelete} />


            ) : (<p>No items found</p>)
            }
        </>
    )

}



export default Content
