import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BlogRoutes from './components/blog/routes';
import PortfolioRoutes from './components/portfolio/routes';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/b" component={BlogRoutes} />
                <Route path="/" component={PortfolioRoutes} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;