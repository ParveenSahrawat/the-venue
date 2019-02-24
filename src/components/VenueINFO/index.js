import React from 'react';
import Zoom from 'react-reveal/Zoom';
import IconCalendar from '../../resources/images/icons/calendar.png';
import LocationIcon from '../../resources/images/icons/location.png';

const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="content_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{background : `url(${IconCalendar})`}}></div>
                                    <div  className="vn_title">
                                        Event date & time
                                    </div>
                                    <div className="vn_desc">
                                        16 May, 2019 @10:00 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{background : `url(${LocationIcon})`}}></div>
                                    <div  className="vn_title">
                                        Event location
                                    </div>
                                    <div className="vn_desc">
                                        JLN Stadium, New Delhi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;