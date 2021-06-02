import * as React from 'react';

const socialInfo = [
    {
        link: '#',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png',
        alt: 'Facebook',
    },
    {
        link: '#',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
        alt: 'Instagram',
    },
    {
        link: '#',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png',
        alt: 'YouTube',
    },
];

export default function() {
    return (
        <div className="social">
            <h5 className="social__title">
                Ми у соціальних мережах
            </h5>
            <ul className="social__list">
                { socialInfo.map(item => (
                    <li className="social__item">
                        <a
                            className="social__link"
                            href={ item.link }
                        >
                            <img
                                className="social__icon"
                                src={ item.src } 
                                alt={ item.alt } />
                        </a>
                    </li>
                )) }
            </ul>
        </div>
    );
}