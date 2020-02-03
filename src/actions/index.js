
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
