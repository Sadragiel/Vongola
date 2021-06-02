import * as React from 'react';
import Logo from '../Logo';
import Contacts from './Contacts';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

import './styles/index.scss';

export default function() {
    return (
		<footer className="footer">
			<div className="footer__row">
				<div className="footer__column footer__column--3">
					<Logo modifier="logo--bg-primary logo--centered" />
				</div>
				<div className="footer__column footer__column--3">
					<Contacts />
				</div>
				<div className="footer__column footer__column--3">
					<FooterLinks />
				</div>
				<div className="footer__column footer__column--3">
					<SocialLinks />
				</div>
			</div>
			<div className="footer__row">
				<span className="footer__copyright"> Copyright 2021 </span>
			</div>
		</footer>
    );
}