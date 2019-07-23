import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'; 

class MainMenu extends React.Component {
    render() {
        // if category was selected, change relative path
        const relativePath = this.props.page ? '../../' : '';

        return (
            <div className="main-menu">
                <p className="main-menu__caption">Categories</p>
                <ul className="main-menu__categories-list">
                    <Link to={`${relativePath}categories/furniture/posts`}>
                        <li className="main-menu__categories-list__item">Furniture</li>
                    </Link>
                    <Link to={`${relativePath}categories/garden/posts`}>
                        <li className="main-menu__categories-list__item">Garden</li>
                    </Link>
                    <Link to={`${relativePath}categories/jewelry/posts`}>
                        <li className="main-menu__categories-list__item">Jewelry</li>
                    </Link>
                    <Link to={`${relativePath}categories/household/posts`}>
                        <li className="main-menu__categories-list__item">Household items</li>
                    </Link>
                    <Link to={`${relativePath}categories/antiques/posts`}>
                        <li className="main-menu__categories-list__item">Antiques</li>
                    </Link>
                    <Link to={`${relativePath}categories/art/posts`}>
                        <li className="main-menu__categories-list__item">Arts & crafts</li>
                    </Link>
                    <Link to={`${relativePath}categories/appliances/posts`}>
                        <li className="main-menu__categories-list__item">Appliances</li>
                    </Link>
                </ul>
            </div>

        )
    }
}

MainMenu.propTypes = {
    page: PropTypes.string
}

export default MainMenu;