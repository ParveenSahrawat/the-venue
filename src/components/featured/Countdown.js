import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
    state ={
        deadline : 'May, 16, 2019',
        days : '0',
        hours : '0',
        minutes : '0',
        seconds : '0'
    }

    getTimeUntil() {
        const time = Date.parse(this.state.deadline) - Date.parse(new Date());
        if(time < 0) {

        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time)/(1000*60*60)%24);
            const days = Math.floor((time)/(1000*60*60*24));
            this.setState({days,  hours,  minutes});

            this.setState({days, hours, minutes, seconds });
        }
        console.log(time);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(), 1000);
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                            </div>
                            <div className="countdown_tag">
                                days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                hrs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                mins
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            
        );
    }
}

export default Countdown;