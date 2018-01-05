import React from 'react';
import { StackNavigator } from 'react-navigation';

import CategoryList from './components/CategoryList';
import CategoryView from './components/CategoryView';

const RootNavigator = StackNavigator({
  Home: {
    screen: CategoryList
  },
  CategoryView: {
    screen: CategoryView,
    navigationOptions: ({ navigation }) => ({
      gestureResponseDistance: {
        horizontal: 200
      }
    })
  }
});

export default RootNavigator;
