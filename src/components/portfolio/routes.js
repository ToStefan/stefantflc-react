import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/home';
import SlbInfo from './pages/slb_info';
import BlogInfo from './pages/blog_info';
import About from './pages/about';
import Register from './pages/auth/register';
import LogIn from './pages/auth/log_in';
import HubSpotForm from './pages/hubspot_form/hubspot_form';
import LoggedPanel from './bottom_panel/logged_panel';
import UnloggedPanel from './bottom_panel/unlogged_panel';
import TopPanel from './top_panel';
import ClientDetails from './master_pages/client_details/client_details';
import ClientDetailsIp from './master_pages/client_details/client_details_ip';
import MasterHome from './master_pages/master_home';
import GuestHome from './guest_pages/guest_home';

import Auth from './../hoc/auth';
import PushClientDetails from './../hoc/push_client_details';
import { API_URL } from './../../config';
import './portfolio.css';

class PortfolioRoutes extends Component {

    state = {
        loggedUser: null
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem("loggedUser");
        this.setState({ loggedUser: null });
        this.props.history.push('/home');
    }

    loadUser = () => {
        axios.get(`${API_URL}/auth/me`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            localStorage.setItem('role', res.data.authorities.length);
            localStorage.setItem("loggedUser", res.data.username);
            this.setState({ loggedUser: res.data.username });
        })
        this.forceUpdate();
    }

    componentWillMount() {
        if (localStorage.getItem("token") !== null) {
            this.loadUser();
        }
    }

    renderBottomPanel() {
        return this.state.loggedUser !== null ? <LoggedPanel logout={this.logout} /> : <UnloggedPanel />
    }

    render() {
        return (
            <div>
                <TopPanel />

                <Switch>
                    <Route path="/home" exact component={() => <PushClientDetails path={"Home"}><Home /></PushClientDetails>} />
                    <Route path="/more-about-me" exact component={About} />
                    <Route path="/blog" exact component={BlogInfo} />
                    <Route path="/slb-info" exact component={() => <PushClientDetails path={"Slb Info"}><SlbInfo /></PushClientDetails>} />
                    <Route path="/hubspot-form" exact component={HubSpotForm} />

                    <Route path="/log-in" exact component={() => <LogIn loadUser={this.loadUser} />} />
                    <Route path="/register" exact component={Register} />

                    <Route path="/guest" exact component={() => <Auth roleLevel={1}><GuestHome /></Auth>} />

                    <Route path="/master" exact component={() => <Auth roleLevel={5}><MasterHome /></Auth>} />
                    <Route path="/client-details" exact component={() => <Auth roleLevel={5}><ClientDetails /></Auth>} />
                    <Route path="/client-details/:ip" exact component={(props) => <Auth roleLevel={5}><ClientDetailsIp {...props} /></Auth>} />

                    <Route component={Home} />
                </Switch>

                {this.renderBottomPanel()}
            </div>
        );
    }
}

export default PortfolioRoutes;