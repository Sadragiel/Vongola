import * as React from 'react';
import {render} from 'react-dom';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/saga.init'

import HomePage from './pages/HomePage';
import About from './pages/About';

import Header from './components/Header';
import UserList from './components/UserList';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<h1 className="test">Danylo lol</h1>
				<Header />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/user">
						<UserList />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

render(<App />, document.getElementById('app'));