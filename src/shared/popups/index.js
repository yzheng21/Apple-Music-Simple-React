import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlaylistCreator from './playlist_creator/index';
import PlaylistSelector from './playlist_selector/index';
import OptionsMenu from './options/index';

const popups = {
    'Playlist Creator': <PlaylistCreator />,
    'Playlist Selector': <PlaylistSelector />,
    'Options': <OptionsMenu />
};

const Container = styled.div``;

const mapStateToProps = state => {
    return {
        viewState: state.viewState,
    };
};

const PopupStack = connect(mapStateToProps)(({popupStack, closing}) => {
    return popupStack.map(({name, props}, index) => {
        const popup = popups[name];
        props.index = index;
        props.closing = index === popupStack.length - 1 && closing;
        props.key = `popup-${index}`;

        try {
            return React.cloneElement(popup, props);
        } catch (e) {
            console.error('Error: This popup is broken: ', popup);
            return null;
        }
    });
});
