import * as React from 'react';
import CourseList from '../../components/CourseList';
import './styles/index.scss';

const userMock = {
    fullname: 'Morning Glory',
    ava: 'http://img1.reactor.cc/pics/post/full/irusu-Morning-Glory-mlp-fallout-my-little-pony-6459325.jpeg',
    email: 'Fallen_Glory@enclave.com',
    bio: `Morning Glory is a pegasus mare from the city of Thunderhead, a Pegasus Enclave city built over Hoofington near the top of Shadowbolt Tower. Glory is the middle child of the five daughters of Thunderhead politician Sky Striker and the ex-surface Pegasus Dawn and grew up in their estate in an affulent district of the city. Kindhearted and intelligent, she showed a desire to help other ponies from a young age and had an interest in also helping non-pegasi, possibly due to either her mother's past life, or her father's political desires to establish contact with the surface to aid the Enclave. She pursued an academic career in medicine where she quickly became noted as something of a prodigy, gaining the personal attention of the eccentric-yet-brilliant Professor Morningstar.`,
    age: 18,

    courses: [
        {
            name: 'Основи web-програмування - Частина 2',
            shortDesc: 'Хостинг веб додатків з базою даних, створення динамічних веб сайтів.',
            tags: ['proggramming'],
            ava: 'https://progbase.herokuapp.com/images/wpb.png',
            isActive: true,
        },
        {
            name: 'Основи web-програмування - Частина 2',
            shortDesc: 'Хостинг веб додатків з базою даних, створення динамічних веб сайтів.',
            tags: ['biology'],
            ava: 'https://progbase.herokuapp.com/images/wpb.png',
            isActive: false,
        },
    ],
};

export default function () {
    return (
        <div className="user-page">
            <img 
                className="user-page__ava"
                src={ userMock.ava } 
            />
            <h3 className="user-page__name">
                { userMock.fullname }
            </h3>
            <section className="user-page__common-info">
                <div className="user-page__row">
                    <span className="user-page__label">
                        Email:
                    </span>
                    <span className="user-page__data">
                        { userMock.email }
                    </span>
                </div>
                <div className="user-page__row">
                    <span className="user-page__label">
                        Age:
                    </span>
                    <span className="user-page__data">
                        { userMock.age }
                    </span>
                </div>
                <div className="user-page__row">
                    <span className="user-page__label">
                        bio:
                    </span>
                    <span className="user-page__data">
                        { userMock.bio }
                    </span>
                </div>
            </section>
            <section className="user-page__courses courses">
                <CourseList courses={ userMock.courses } />
            </section>
        </div>
    );
}
