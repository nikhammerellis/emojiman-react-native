import {
  CATEGORIES_FETCH_SUCCESS,
  EMOJIS_FETCH_SUCCESS,
  POP_EMOJIS_FETCH_SUCCESS,
  SET_RECENTLY_USED_EMOJIS
} from '../actions/actionTypes';

const INITIAL_STATE = {
  categories: [],
  emojiList: [],
  popularEmojis: [],
  recentlyUsed: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload
      };
    case EMOJIS_FETCH_SUCCESS:
      return {
        ...state,
        emojiList: action.payload
      };
    case POP_EMOJIS_FETCH_SUCCESS:
      return {
        ...state,
        popularEmojis: action.payload
      };
    case SET_RECENTLY_USED_EMOJIS:
      return {
        ...state,
        recentlyUsed: action.payload
      };
    default:
      return state;
  }
};
