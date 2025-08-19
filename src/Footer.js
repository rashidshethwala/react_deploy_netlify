import React from 'react'

const Footer = ({ length }) => {

    //const today = new Date();

    return (
        <footer className="footer">
            {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
            <p>{length} List {length === 1 ? 'item' : 'items'}</p>
            <p>Copyright &copy; 2023</p>
            {/* <p>All rights reserved</p>
            <p>Version 1.0.0</p> */}
        </footer>
    )
}

export default Footer
