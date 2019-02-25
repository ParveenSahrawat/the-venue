import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';

import SideDrawer from './SideDrawer';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    state = {
        drawerOpen : false,
        headerShow : false,
    }

    handleScroll() {
        if(window.scrollY > 0) {
            this.setState({headerShow : true});
        } else {
            this.setState({headerShow : false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    toggleDrawer = (value) => {
        this.setState({drawerOpen : value});
    }

    render() {
        return (
            <AppBar
                position = "fixed"
                style = {{
                    backgroundColor : this.state.headerShow ? '#1a2f3f' : 'transparent',
                    // backgroundColor: '#000',
                    boxShadow : 'none',
                    padding : '10px 0px',
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>
                    <IconButton
                        aria-label="menu" color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                </Toolbar>
                <SideDrawer open={this.state.drawerOpen} onClose={(value) => this.toggleDrawer(value)} />
            </AppBar>
        );
    }
}

export default Header;