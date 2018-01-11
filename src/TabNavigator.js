import React from 'react';
import { TabNavigator } from 'react-navigation';
//import Icon from 'react-native-fa-icons';

import EmojiRouter from './EmojiRouter';
import GifRouter from './GifRouter';

//this will be the most top level router, having the stack (emoji) navigator nested inside
const TabRouter = TabNavigator({
  TabItem1: {
    screen: EmojiRouter,
    navigationOptions: {
      tabBarLabel: 'Emojis'
    }
  },
  TabItem2: {
    screen: GifRouter,
    navigationOptions: {
      tabBarLabel: 'Gifs'
    }
  }
}, {
    tabBarOptions: {
       activeTintColor: 'black',
       inactiveTintColor: '#D3D3D3',
       labelStyle: {
         fontSize: 20,
         marginBottom: 10
       }
    }
  });

export default TabRouter;
