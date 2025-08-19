import React from 'react'

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Grocery List'
};

export default Header
