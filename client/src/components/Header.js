import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="main-header" data-test="header">
            <div className="main-header__inner">
                <Link to="/">
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png"
                        alt="logo"
                        data-test="logo-btn"
                    />
                </Link>
                <div>
                    <Link to="/likes">
                        <i className="fa fa-heart" data-test="likes-btn" />
                    </Link>
                    <Link to="/new">
                        <button className="btn-secondary" data-test="new-post-btn">
              New post
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
