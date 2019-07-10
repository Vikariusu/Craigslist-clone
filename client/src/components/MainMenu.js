import React from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom'

class MainMenu extends React.Component {
    render() {
        return (
            <div className="main-menu">
                <p className="main-menu__caption">Categories</p>
                <ul className="main-menu__categories-list">
                    <Link to={'categories/furniture/posts'}>
                        <li className="main-menu__categories-list__item">Furniture</li>
                    </Link>
                    <Link to={'categories/garden/posts'}>
                        <li className="main-menu__categories-list__item">Garden</li>
                    </Link>
                    <Link to={'categories/jewelry/posts'}>
                        <li className="main-menu__categories-list__item">Jewelry</li>
                    </Link>
                    <li className="main-menu__categories-list__item">Appliances</li>
                    <li className="main-menu__categories-list__item">Arts & crafts</li>
                    <li className="main-menu__categories-list__item">Household items</li>
                </ul>
            </div>

        )
    }
}

export default MainMenu;