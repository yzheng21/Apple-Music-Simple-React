
import Api from '../api/index';

// nav action
export const toggleFullscreen = () => ({type: 'TOGGLE_FULLSCREEN'});

// audio action
export const playSong = ({ playlist, index }) => {
    return dispatch => {
       dispatch({
          type: 'PLAY_SONG',
          playlist,
          index,
       });
    };
 };
 
 export const resume = () => ({ type: 'RESUME' });
 export const pause = () => ({ type: 'PAUSE' });
 export const nextSong = () => ({ type: 'NEXT_SONG' });
 export const prevSong = () => ({ type: 'PREV_SONG' });
 export const addToQueue = track => ({ type: 'ADD_TO_QUEUE', track });
 export const changeVolume = volume => ({ type: 'CHANGE_VOLUME', volume });
 export const updateTime = info => ({ type: 'UPDATE_TIME', info });

//  view action
export const pushView = view => ({ type: 'PUSH_VIEW', view });
export const popView = () => ({ type: 'POP_VIEW' });
export const pushPopup = popup => ({ type: 'PUSH_POPUP', popup });
export const popPopup = () => ({ type: 'POP_POPUP' });

// api action
export const fetchArtists = () => {
   return dispatch => {
      return Api.fetchArtists()
         .then(artists => {
            const artistData = {};

            for (let i in artists) {
               const artist = artists[i].artist;
               artistData[artist] = [];
            }

            dispatch({
               type: 'FETCH_ARTIST_LIST_SUCCESS',
               artists,
               artistData,
            });
         })
         .catch(e => {
            console.log(e);
         })
   }
}

export const fetchArtist = artist => {
   return dispatch => {
      return Api.fetchArtist(artist)
         .then(albums => {
            const albumData = {};

            for (let i in albums) {
               const album = albums[i];
               albumData[album.album] = [];
            }

            dispatch({
               type: 'FETCH_ARTIST_SUCCESS',
               name: artist,
               albums,
               albumData,
            });
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const fetchAlbums = () => {
   return dispatch => {
      return Api.fetchAlbums()
         .then(albums => {
            const albumData = {};

            for (let album of albums) {
               const name = album.album;
               albumData[name] = [];
            }

            dispatch({
               type: 'FETCH_ALBUM_LIST_SUCCESS',
               albumData,
               albums,
            });
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const fetchAlbum = ({ artist, album }) => {
   return dispatch => {
      return Api.fetchAlbum({ artist, album })
         .then(tracks => {
            dispatch({
               type: 'FETCH_ALBUM_SUCCESS',
               album,
               tracks,
            });
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const addToPlaylist = (track, playlist) => {
   return dispatch => {
      let playlists = localStorage.appleMusicPlaylists;
      playlists = playlists ? JSON.parse(playlists) : playlists;

      // Add track to playlist
      playlist = {
         ...playlist,
         tracks: [...playlist.tracks, track],
      };

      // Update playlist in playlist list
      playlists = {
         ...playlists,
         [playlist.title]: playlist,
      };

      localStorage.appleMusicPlaylists = JSON.stringify(playlists);

      dispatch({
         type: 'UPDATE_PLAYLIST',
         playlists,
      });
   };
};
