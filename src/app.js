import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import PortfolioRoutes from './components/portfolio/routes';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={PortfolioRoutes} />
                <Route component={PortfolioRoutes} />
            </Switch>
        </HashRouter>
    )
}

export default App;