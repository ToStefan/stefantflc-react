import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from './blog';

const BlogRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/b" component={Blog} />
            </Switch>
        </div>
    );
};

export default BlogRoutes;