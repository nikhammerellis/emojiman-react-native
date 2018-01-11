import firebase from 'firebase';

import {
  GIFS_FETCH_SUCCESS
} from '../actions/actionTypes';

export const fetchGifs = () => {
  return (dispatch) => {
    const ref = firebase.database().ref('images');
    ref.on('value', snapshot => {
      const gifs = snapshotToArray(snapshot);
      dispatch({ type: GIFS_FETCH_SUCCESS, payload: gifs });
    });
  };
};

const snapshotToArray = snapshot => {
    const returnArr = [];

    snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item.uid = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
