import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
    return (
        <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
            <List>
                <ListItem button onClick={console.log('Event')} >Event starts in</ListItem>
                <ListItem button onClick={console.log('Event')} >Venue NFO</ListItem>
                <ListItem button onClick={console.log('Event')} >Highlights</ListItem>
                <ListItem button onClick={console.log('Event')} >Pricing</ListItem>
                <ListItem button onClick={console.log('Event')} >Location</ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;