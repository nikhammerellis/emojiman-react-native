import React from 'react';
import { StackNavigator } from 'react-navigation';

import Gifs from './components/Gifs';

const GifRouter = StackNavigator({
  Home: {
    screen: Gifs
  }
});

export default GifRouter;
