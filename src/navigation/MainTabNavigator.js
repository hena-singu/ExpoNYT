import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FeaturedScreen from '../screens/FeaturedScreen';
import SearchScreen from '../screens/SearchScreen';
import BookmarksScreen from '../screens/BookmarksScreen';

//
const FeaturedStack = createStackNavigator({
  Featured: FeaturedScreen
});

FeaturedStack.navigationOptions = {
  tabBarLabel: 'Featured',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-list'}
    />
  ),
};

//
const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-search'}
    />
  )
};

//
const BookmarksStack = createStackNavigator({
  Bookmarks: BookmarksScreen
});

BookmarksStack.navigationOptions = {
  tabBarLabel: 'Bookmarks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-bookmarks'}
    />
  )
};

export default createBottomTabNavigator({
  FeaturedStack,
  SearchStack,
  BookmarksStack,
});
