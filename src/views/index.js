import React, { Component } from 'react';
import styled from 'styled-components';
import WelcomeBar from '../components/WelcomeBar';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header/index';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
`;

class AppleMusic extends Component {
    render() {
        return (
            <Container>
                <WelcomeBar />
                <Header />
                <BottomBar />
            </Container>
                
        );
    }
}

export default AppleMusic;