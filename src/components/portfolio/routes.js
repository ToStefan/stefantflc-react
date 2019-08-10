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
import ClientDetails from './master_pages/client_details';
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
                    <Route path="/home" component={() => <PushClientDetails><Home /></PushClientDetails>} />
                    <Route path="/more-about-me" component={About} />
                    <Route path="/blog" component={BlogInfo} />
                    <Route path="/slb-info" component={SlbInfo} />
                    <Route path="/hubspot-form" component={HubSpotForm} />

                    <Route path="/log-in" component={() => <LogIn loadUser={this.loadUser} />} />
                    <Route path="/register" component={Register} />

                    <Route path="/guest" component={() => <Auth roleLevel={1}><GuestHome /></Auth>} />

                    <Route path="/client-details" component={() => <Auth roleLevel={5}><ClientDetails /></Auth>} />
                    <Route path="/master" component={() => <Auth roleLevel={5}><MasterHome /></Auth>} />

                    <Route path="/" component={Home} />
                </Switch>

                {this.renderBottomPanel()}
            </div>
        );
    }
}

export default PortfolioRoutes;