import React, { Component } from 'react';
import WelcomeBar from '../components/WelcomeBar';
import BottomBar from '../components/BottomBar';

class AppleMusic extends Component {
    render() {
        return (
            <div className="main">
                <WelcomeBar />
                <BottomBar />
            </div>
        );
    }
}

export default AppleMusic;