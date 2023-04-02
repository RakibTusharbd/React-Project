import React from 'react';
import './Header.css'

const Header = (props) => {
    console.log(props)
    return (
        <nav className='header'> 
            <h2>Knowledge Cafe</h2>
           <div>
           <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
           </div>
        </nav>
        
    );
};

export default Header;