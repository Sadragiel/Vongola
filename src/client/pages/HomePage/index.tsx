import * as React from 'react';
import Goals from './Goals';
import MainBanner from './MainBanner';
import './styles/index.scss';

export default function () {
    return (
        <div className="home-page">
            <MainBanner />
            <Goals />
        </div>
    );
}
