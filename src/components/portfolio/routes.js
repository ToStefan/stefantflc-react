import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from './info/contact';
import SlbInfo from './info/slb_info';
import About from './info/about';

import Register from './auth/register';
import LogIn from './auth/log_in';

import HubSpotForm from './hubspot_form/hubspot_form';

import Navigation from './navigation';

import ClientDetails from './client_details/client_details';
import ClientDetailsIp from './client_details/client_details_ip';
import ChatContainer from '../chat/chat_container';
import Collections from '../collection/collections';
import UploadContainer from '../collection/upload/upload_container';
import CollectionImages from '../collection/collection_images';

import Auth from '../../hoc/auth';
import PushClientDetails from '../../hoc/push_client_details';

import '../main.css';

const Routes = () => {
    return (
        <div>
            <Auth roleLevel={0}><Navigation /></Auth>

            <Switch>
                <Route path="/contact" exact component={Contact} />
                <Route path="/slb-info" exact component={() =>
                    <Auth roleLevel={0}>
                        <PushClientDetails path={"Slb Info"}>
                            <SlbInfo />
                        </PushClientDetails>
                    </Auth>} />
                <Route path="/about" exact component={() =>
                    <Auth roleLevel={0}>
                        <PushClientDetails path={"About"}>
                            <About />
                        </PushClientDetails>
                    </Auth>} />

                <Route path="/hubspot-form" exact component={HubSpotForm} />

                <Route path="/log-in" exact component={LogIn} />
                <Route path="/register" exact component={Register} />

                <Route path="/chat" exact component={() => <Auth roleLevel={1}><ChatContainer /></Auth>} />
                <Route path="/collections" exact component={() =>
                    <Auth roleLevel={0}>
                        <PushClientDetails path={"collections"}>
                            <Collections />
                        </PushClientDetails>
                    </Auth>} />
                <Route path="/collections/:id" exact component={() => <Auth roleLevel={1}><CollectionImages /></Auth>} />
                <Route path="/collection/upload" exact component={() => <Auth roleLevel={5}><UploadContainer /></Auth>} />

                <Route path="/client-details" exact component={() => <Auth roleLevel={5}><ClientDetails /></Auth>} />
                <Route path="/client-details/:ip" exact component={(props) => <Auth roleLevel={5}><ClientDetailsIp {...props} /></Auth>} />

                <Route component={Contact} />
            </Switch>

        </div>
    );
};

export default Routes;