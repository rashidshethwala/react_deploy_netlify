import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (

        <li className='item' key={item.id}>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}

            // onChange={() => {
            //     const newItems = items.map(i => {
            //         if (i.id === item.id) {
            //             return { ...i, checked: !i.checked };
            //         }
            //         return i;
            //     });
            //     setItems(newItems);
            // }}
            />

            <label onDoubleClick={() => handleCheck(item.id)} style={item.checked ? { textDecoration: 'line-through' } : null}>
                {item.item}
            </label>
            {/* <button>Delete</button> */}
            <FaTrashAlt
                role='button'
                tabIndex={0}
                onClick={() => handleDelete(item.id)}

            />
        </li>
    )
}

export default LineItem;
