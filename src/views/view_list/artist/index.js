import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchArtist, pushView } from '../../../actions/index';
import AlbumButton from '../../../shared/album_button/index';
import color from '../../../styles/color';

const Container = styled.div`
    margin-top: 48px;
    border-top: 1px solid ${color.gray[2]};
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
`;

const mapStateToProps = state => {
    return {
        viewState: state.viewState,
        apiState: state.apiState,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pushView: view => dispatch(pushView(view)),
        fetchArtist: artist => dispatch(fetchArtist(artist)),
    }
}

class ArtistView extends Component {
    viewAlbum = ({artist, album}) => {
        this.props.pushView({
            name: 'Album',
            title: album,
            props: {
                hideTitle: true,
                artist,
                album
            }
        });
    }

    componentDidMount() {
        const { artist, apiState } = this.props;
        const { artistData } = apiState.data;
  
        if (artistData[artist].length === 0) {
           this.props.fetchArtist(artist);
        }
    }

    render() {
        const { artist, apiState } = this.props;
        const { artistData } = apiState.data;
        const albums = artistData[artist];

        return (
            <Container>
                <ButtonContainer>
                {albums &&
                    albums.map((item, index) => {
                        const { album, artist, artwork } = item;
                        const url = `http://tannerv.ddns.net:12345/SpotiReact/${artwork}`;

                        return (
                            <AlbumButton
                            key={album}
                            label={album}
                            sublabel={artist}
                            artwork={url}
                            onClick={() => this.viewAlbum({ artist, album })}
                            />
                        );
                    })}
                </ButtonContainer>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistView);
