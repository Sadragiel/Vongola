import * as React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Login from './Login';
import Logo from './../Logo';
import Navigation from './Navigation';

import './styles/index.scss';

export default function () {
    return (
        <header className="header">
            <div className="header__row">
                <Logo modifier="logo--bg-primary logo--centered" />
                <Navigation />
                <Login />
                <LanguageSwitcher />
            </div>
        </header>
    );
}
