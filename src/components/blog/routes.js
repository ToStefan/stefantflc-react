import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from './blog';
import BlogEditor from './topic/new/editor';

import Header from './header/header';
import SignIn from './authentication/signin';
import SignUp from './authentication/signup';

const BlogRoutes = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/b/sign-up" component={SignUp} />
                <Route path="/b/sign-in" component={SignIn} />
                <Route path="/b/new-topic" component={BlogEditor} />
                <Route path="/b" component={Blog} />
            </Switch>
        </div>
    );
};

export default BlogRoutes;