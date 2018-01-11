import {
  GIFS_FETCH_SUCCESS
} from '../actions/actionTypes';

const INITIAL_STATE = {
  gifs: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GIFS_FETCH_SUCCESS:
      return {
        ...state,
        gifs: action.payload
      };
    default:
      return state;
  }
};
