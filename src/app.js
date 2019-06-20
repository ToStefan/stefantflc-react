import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BlogRoutes from './components/blog/routes';
import Portfolio from './components/portfolio/porfolio';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/b" component={BlogRoutes} />
                <Route path="/" component={Portfolio} />
            </Switch>
        </BrowserRouter >
    )
}

export default App;