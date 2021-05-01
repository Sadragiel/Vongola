import * as React from 'react';
import { Link } from "react-router-dom";

export default function() {
    return (
        <nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
                <li>
					<Link to="/user">Users</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
        </nav>
    );
}