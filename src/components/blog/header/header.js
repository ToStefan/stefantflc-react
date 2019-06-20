import React, { Component } from 'react';

import Button from '../widgets/header/button';

import './header.css';
import './../blog.css';

class Header extends Component {

    state = {
        isUserLogged: false
    }

    renderButtons() {
        return this.state.isUserLogged ?
            [<Button key="1" imgClassName="fas fa-cubes" text="Your blog" href="/LOGGEDUSER_USERNAME" />,
            <Button key="2" imgClassName="fas fa-cogs" text="Settings" href="/settings" />]
            :
            [<Button key="3" imgClassName="fas fa-sign-in-alt" text="Sign in" href="/b/sign-in" />,
            <Button key="4" imgClassName="fas fa-user-plus" text="Sign up" href="/b/sign-up" />]
    }

    render() {
        return (
            <div className="container backgroundBox">
                <div className="col-md-8">
                    <div className="row">
                        <div className="searchBox">
                            <input type="text" placeholder="Search for blogs or topics..." />
                            <button><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="headerButtonGroup">
                            {this.renderButtons()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;