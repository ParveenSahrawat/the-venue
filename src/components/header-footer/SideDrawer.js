import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';
import { element } from 'prop-types';


const SideDrawer = (props) => {

    const scrollToElement = () => {
        scroller.scrollTo(element, {
            duration : 1500,
            delay : 100,
            smooth : true
        })
    }

    return (
        <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
            <List>
                <ListItem button onClick={() => this.scrollTo('')} >Event starts in</ListItem>
                <ListItem button onClick={() => this.scrollTo('')} >Venue NFO</ListItem>
                <ListItem button onClick={() => this.scrollTo('Highlights')} >Highlights</ListItem>
                <ListItem button onClick={() => this.scrollTo('')} >Pricing</ListItem>
                <ListItem button onClick={() => this.scrollTo('')} >Location</ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;