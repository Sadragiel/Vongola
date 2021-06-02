import * as React from 'react';
import { render } from 'react-dom';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/saga.init';

import Header from './components/Header';

import { routingConfig, routerArray } from './routing-config';
import Footer from './components/Footer';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    {routerArray.map((routKey) => (
                        <Route key={routingConfig[routKey].link} path={routingConfig[routKey].link}>
                            {routingConfig[routKey].page}
                        </Route>
                    ))}
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
};

render(<App />, document.getElementById('app'));
