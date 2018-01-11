import { combineReducers } from 'redux';

import CategoryReducer from './CategoryReducer';
import GifReducer from './GifReducer';

export default combineReducers({
  categories: CategoryReducer,
  gifs: GifReducer
});
