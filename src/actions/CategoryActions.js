import firebase from 'firebase';

import {
  CATEGORIES_FETCH_SUCCESS,
  EMOJIS_FETCH_SUCCESS,
  POP_EMOJIS_FETCH_SUCCESS,
  SET_RECENTLY_USED_EMOJIS
} from '../actions/actionTypes';


export const fetchCategories = () => {
  return (dispatch) => {
    firebase.database().ref('categories')
      .on('value', snapshot => {
        const arr = snapshotToArray(snapshot);
        arr.reverse();
        dispatch({ type: CATEGORIES_FETCH_SUCCESS, payload: arr });
      });
  };
};

export const fetchEmojisForCategory = (category) => {
  return (dispatch) => {
    const emojiList = firebase.database().ref('emojis');

    emojiList.orderByChild(`categories/${category.name}`).equalTo(true).on('value', snapshot => {
      const arr = snapshotToArray(snapshot);
      arr.sort(sortArrayAlphabetically);

      dispatch({ type: EMOJIS_FETCH_SUCCESS, payload: arr });
    });
  };
};

export const fetchPopularEmojis = () => {
  return (dispatch) => {
    const emojiList = firebase.database().ref('emojis');
    emojiList.orderByChild('copyCount').limitToLast(15).on('value', snapshot => {
      const sortedArray = snapshotToArray(snapshot);
      dispatch({ type: POP_EMOJIS_FETCH_SUCCESS, payload: sortedArray });
    });
  };
};

export const setRecentlyUsed = (list) => {
  return (dispatch) => {
    dispatch({ type: SET_RECENTLY_USED_EMOJIS, payload: list });
  };
};

const snapshotToArray = snapshot => {
    const returnArr = [];

    snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item.uid = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr.reverse();
};

const sortArrayAlphabetically = (a, b) => {
  const textA = a.name.toUpperCase();
  const textB = b.name.toUpperCase();

  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
};

export const incrementCopyCount = (uid, count) => {
  return (dispatch) => {
    let copyCount;
    if (count <= 0) {
      copyCount = 1;
    } else {
      copyCount = count + 1;
    }

    firebase.database().ref(`emojis/${uid}`)
     .update({ copyCount })
     .then(() => {
       console.log('copyCount update successful!');
     })
     .catch((error) => {
       console.log(error);
     });
  };
};
