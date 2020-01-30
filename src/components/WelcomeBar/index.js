import React, { Component } from 'react';
import styled from 'styled-components';
import animation from '../../styles/animate';

const breakpointSm = `@media screen and (max-width: 700px)`;

const Container = styled.div`
    z-index: 200;
    position: fixed;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    animation: ${props => props.isClosing ? animation.fadeOut : null} 0.3s;
`;

const LogoContainer = styled.div`
    position: relative;
    display: flex;
    width: ${props => props.width};
    height: 3.5rem;
    padding-bottom: 1vh;
    overflow: hidden;
    transition: all 0.5s;
    animation: ${props => props.isClosing ? animation.scaleOut : animation.scale} 0.3s ease;

    ${breakpointSm} {
        height: 2rem;
        width: ${props => props.width === '18rem' && '10rem'};
    }
`;

const WrapperContainer = styled.div`
   position: relative;
   display: ${props => props.hidden ? 'none' : 'flex'};
   align-items: flex-end;
   height: 100%;
   background: white;
`;

const AppleLogo = styled.img`
   height: 100%;
`;

const MusicLogo = styled.img`
   width: 11rem;
   margin-left: 20px;

   ${breakpointSm} {
      width: 6rem;
      margin-left: 10px;
   }
`;

const JsLogo = styled.img`
    position: absolute;
    width: 2.25rem;
    top: 20px;
    animation: ${animation.scale} 0.3s ease;

    ${breakpointSm} {
    width: 1.5rem;
    top: 10px;
    }
`;

class WelcomeBar extends Component {

    state = {
        isOpen: true,
        isClosing: false,
        width: '4rem',
        showMusic: false,
        showExtension: false,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
               showMusic: true,
               width: '18rem'
            });
        }, 300);

        setTimeout(() => {
            this.setState({
               showExtension: true
            });
        }, 800);

        setTimeout(() => {
            this.setState({ isClosing: true });
        }, 1700);

        setTimeout(() => {
            this.setState({
               isClosing: false,
               isOpen: false,
            });
        }, 2000);
    }

    render() {
        const {isOpen, isClosing} = this.state;
        return (
            <Container isOpen={isOpen || isClosing} isClosing={isClosing}>
                <LogoContainer width={this.state.width} isClosing={isClosing}>
                    <WrapperContainer>
                        <AppleLogo src="images/logo_apple.svg" />
                    </WrapperContainer>
                    <WrapperContainer hidden={!this.state.showMusic}>
                        <MusicLogo src="images/logo_music.svg" />
                    </WrapperContainer>
                    <WrapperContainer hidden={!this.state.showExtension}>
                        <JsLogo src="images/logo_js.svg" />
                    </WrapperContainer>
                </LogoContainer>
            </Container>
        );
    }
}

export default WelcomeBar;