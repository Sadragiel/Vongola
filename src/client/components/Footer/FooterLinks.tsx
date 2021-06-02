import * as React from 'react';
import { Link } from "react-router-dom";
import { routingConfig, navigationRouterArray } from '../../routing-config';

export default function() {
    return (
        <nav className="footer-links">
            <h5 className="footer-links__title">
                Корисні посилання
            </h5>
            <ul className="footer-links__list">
                { navigationRouterArray.map(routKey => 
                    <li key={ routingConfig[routKey].link } className="footer-links__item">
                        <Link className="footer-links__link" to={ routingConfig[routKey].link }>
                            { routingConfig[routKey].label }
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}