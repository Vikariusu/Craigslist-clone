import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="main-header">
            <div className="main-header__inner">
                <Link to="/">
                    <img src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png" alt='logo'/>
                </Link>
                <Link to="/new">
                    <button className="btn-secondary">New post</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;