import * as React from 'react';
import { Link } from "react-router-dom";
import { routingConfig, navigationRouterArray } from '../../routing-config';

export default function() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                { navigationRouterArray.map(routKey => 
                    <li key={ routingConfig[routKey].link } className="navigation__item">
                        <Link to={ routingConfig[routKey].link }>
                            { routingConfig[routKey].label }
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}