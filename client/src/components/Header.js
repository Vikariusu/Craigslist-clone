import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/posts/new">New post</Link>
        </div>
    )
}

export default Header;