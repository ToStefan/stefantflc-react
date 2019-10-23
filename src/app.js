import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Routes from './components/routes';

const App = () => {
    return (
        <HashRouter>
            <Switch>

                <Route path="/" component={Routes} />
                <Route component={Routes} />
            </Switch>
        </HashRouter>
    )
}

export default App;