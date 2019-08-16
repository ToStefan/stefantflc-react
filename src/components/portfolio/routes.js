import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import SlbInfo from './pages/slb_info';
import BlogInfo from './pages/blog_info';
import About from './pages/about';
import Register from './pages/auth/register';
import LogIn from './pages/auth/log_in';
import HubSpotForm from './pages/hubspot_form/hubspot_form';

import BottomPanel from './bottom_panel';
import TopPanel from './top_panel';

import NavigationPanel from './navigation_panel';
import ClientDetails from './client_details/client_details';
import ClientDetailsIp from './client_details/client_details_ip';

import Auth from './../hoc/auth';
import PushClientDetails from './../hoc/push_client_details';

import './portfolio.css';

const Routes = () => {
    return (
        <div>
            <TopPanel />

            <Switch>
                <Route path="/home" exact component={() =>
                    <Auth roleLevel={0}>
                        <PushClientDetails path={"Home"}>
                            <Home />
                        </PushClientDetails>
                    </Auth>} />
                <Route path="/slb-info" exact component={() =>
                    <Auth roleLevel={0}>
                        <PushClientDetails path={"Slb Info"}>
                            <SlbInfo />
                        </PushClientDetails>
                    </Auth>} />
                <Route path="/more-about-me" exact component={About} />
                <Route path="/blog" exact component={BlogInfo} />
                <Route path="/hubspot-form" exact component={HubSpotForm} />

                <Route path="/log-in" exact component={LogIn} />
                <Route path="/register" exact component={Register} />

                <Route path="/navigator" exact component={() => <Auth roleLevel={0}><NavigationPanel /></Auth>} />
                <Route path="/navigator/client-details" exact component={() => <Auth roleLevel={5}><ClientDetails /></Auth>} />
                <Route path="/navigator/client-details/:ip" exact component={(props) => <Auth roleLevel={5}><ClientDetailsIp {...props} /></Auth>} />

                <Route component={Home} />
            </Switch>

            <BottomPanel />
        </div>
    );
};

export default Routes;