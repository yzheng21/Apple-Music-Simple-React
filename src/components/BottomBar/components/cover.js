import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleFullscreen } from '../../../actions/index';
import color from '../../../styles/color';
import animation from '../../../styles/animate';

const { fadeIn, fadeOut } = animation;
const Container = styled.div`
    position: fixed;
    display: ${props => !props.isOpen && 'none'};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${color.grayAlpha[4]};
    cursor: pointer;
    animation: ${props => (props.isClosing ? fadeOut : fadeIn)} 0.35s ease;
`;

const mapState

class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            isClosing: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            isOpen: false,
            isClosing: true,
        }
    }

    animateClosed() {
        setTimeout(() => {
            this.setState({
                isOpen: false,
                isClosing: false
            })
        }, 330);
    }

    componentDidUpdate() {
        if (this.state.isClosing) {
            this.animateClosed();
        }
    }

    render() {
        const { isOpen, isClosing } = this.state;
        return (
            <Container 
                isOpen={isOpen || isClosing}
                isClosing={isClosing}
                onClick={this.props.toggleFullscreen}
            />
        );
    }
}

export default Cover;