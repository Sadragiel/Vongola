import * as React from 'react';
import './styles/index.scss';

type Props = {
    modifier?: string;
};

export default function (props: Props) {
    return (
        <figure className={`logo ${props.modifier ?? ''}`}>
            <div className="logo__wrapper">
                <img className="logo__image" src="/images/cloudmane.png" alt="Logo" />
            </div>
        </figure>
    );
}
