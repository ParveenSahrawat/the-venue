import React from 'react';
import Button from '@material-ui/core/Button';
import Ticket from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return (
        <Button href={props.link} variant="contained" size="small" style={{background : props.bck, color : props.color}}>
            <img src={Ticket} className="iconImage" alt="Icon Button" />
            {props.text}
        </Button>
    );
};

export default MyButton;