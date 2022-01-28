import React from 'react'
import './Nav.css'
const Header = props => {
    return (
        <div className="nav">
            <a href="3"> Chakkara App </a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                </ul>

        </div>
    )
}

export default Header