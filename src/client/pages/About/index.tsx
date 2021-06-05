import * as React from 'react';
import QNA from '../../components/QNA';
import './styles/index.scss';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default function () {
    return (
        <div className="about-page">
            <div className="about-page__common-info">
                <h2 className="about-page__title">
                    Про нас
                </h2>
                <p className="about-page__paragraph">
                    { lorem }
                </p>
                <img 
                    src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?format=jpg&quality=90&v=1618511825&width=1024"
                    className="about-page__illustration"
                />
                <p className="about-page__paragraph">
                    { lorem }
                </p>
                <p className="about-page__paragraph">
                    { lorem }
                </p>
            </div>
            <div className="about-page__author">
                <img 
                    className="about-page__ava"
                    src="/images/author.jpg" 
                />
                <section className="about-page__common-info">
                    <span className="about-page__created-by">
                        створено мною -{'>'}
                    </span>
                    <h3 className="about-page__name">
                        Данило Гулько
                    </h3>
                    <div className="about-page__row">
                        <span className="about-page__label">
                            Email:
                        </span>
                        <span className="about-page__data">
                            amogus@sus.com
                        </span>
                    </div>
                </section>
            </div>
            <div
                className="about-page__qna-title"
            >
                Q{'&'}A
            </div>
            <QNA />
        </div>
    );
}
