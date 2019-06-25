import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="main-header">
            <Link to="/">
                <img src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png" />
            </Link>
            <Link to="/posts/new">New post</Link>
        </div>
    )
}

export default Header;