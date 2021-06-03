import * as React from 'react';
//Sus, Пунe, Махараштра, Индия
const contactsList = [
    {
        icon: 'https://ellada94.kiev.ua/wp-content/uploads/2020/08/phone.svg',
        label: '+ 096 123 12 12',
    },
    {
        icon: 'https://ellada94.kiev.ua/wp-content/uploads/2020/08/mail.svg',
        label: 'amogus@sus.com',
    },
    {
        icon: 'https://ellada94.kiev.ua/wp-content/uploads/2020/08/pin.svg',
        label: 'Sus, Пунe, Махараштра, Індія',
    },
];

export default function () {
    return (
        <div className="contacts">
            <h5 className="contacts__title">Контактна інформація</h5>
            <ul className="contacts__list">
                {contactsList.map((item) => (
                    <li key={item.icon} className="contacts__item">
                        <img className="contacts__icon" src={item.icon} />
                        <p className="contacts__label">{item.label}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
