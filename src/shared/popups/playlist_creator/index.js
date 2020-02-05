import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import color from '../../../styles/color';
import animation from '../../../styles/animate';
import { popPopup, pushView } from '../../../actions';

const { slideInFromBottom, slideOutToBottom } = animation;

const Container = styled.div`
    z-index: ${props => 100 + props.index};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    animation: ${props => (props.closing ? slideOutToBottom : slideInFromBottom)}
        0.3s ease-in-out;
`;

const Button = styled.h3`
    margin: 0;
    color: ${color.red[4]};
    font-weight: ${props => props.bold && 'bold'};
    cursor: pointer;
    user-select: none;
`;

const Title = styled.h3`
    margin: 0;
`;

const Section = styled.div`
    display: flex;
    padding: 0 16px;
`;

const TitleInput = styled.textarea`
    margin-left: 16px;
    -webkit-appearance: none;
    font-size: 24px;
    border: none;
    outline: none;
    flex: 1;
    resize: none;
    caret-color: ${color.red[4]};
    font-family: 'SF Pro Display';
`;

const DescriptionInput = styled.textarea`
    margin: 16px 0 16px 16px;
    -webkit-appearance: none;
    font-size: 24px;
    border: none;
    outline: none;
    flex: 1;
    resize: none;
    caret-color: ${color.red[4]};
    border-top: 1px solid ${color.gray[3]};
    border-bottom: 1px solid ${color.gray[3]};
    font-family: 'SF Pro Display';
`;

const mapStateToProps = state => {
    return {
        viewState: state.viewState,
        apiState: state.apiState,
    };
};
 
const mapDispatchToProps = dispatch => {
    return {
        pushView: view => dispatch(pushView(view)),
        popPopup: () => dispatch(popPopup()),
        // fetchPlaylists: () => dispatch(fetchPlaylists()),
        // createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    };
};

class PlaylistCreator extends Component {
    render() {
        return (
            <div>
                PlaylistCreator
            </div>
        );
    }
}

export default PlaylistCreator;