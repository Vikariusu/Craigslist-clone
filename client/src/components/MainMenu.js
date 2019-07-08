import React from 'react';
import PostCard from './PostCard';

class MainMenu extends React.Component {
    render() {
        return (
            <div className="main-menu">
                <p className="main-menu__caption">Categories</p>
                <ul className="main-menu__categories-list">
                    <li className="main-menu__categories-list__item">Furniture</li>
                    <li className="main-menu__categories-list__item">Garden</li>
                    <li className="main-menu__categories-list__item">Appliances</li>
                    <li className="main-menu__categories-list__item">Arts & crafts</li>
                    <li className="main-menu__categories-list__item">Household items</li>
                </ul>
            </div>

        )
    }
}

export default MainMenu;