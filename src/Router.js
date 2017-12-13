import React from 'react';
import { StackNavigator } from 'react-navigation';

import CategoryList from './components/CategoryList';
import CategoryView from './components/CategoryView';

const RootNavigator = StackNavigator({
  Home: {
    screen: CategoryList
  },
  CategoryView: {
    screen: CategoryView
  }
});

export default RootNavigator;
