/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, NavigatorIOS, View, TouchableHighlight, FlatList} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyDetails from './PropertyDetails';
import MediaPlayer from './MediaPlayer';
import MapsScreen from './MapsScreen';

  const HomeNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Map: {screen: MapsScreen},
    Search: {screen: SearchPage},
    Results: {screen: SearchResults},
    Details: {screen: PropertyDetails}
  });
  const Home = createAppContainer(HomeNavigator);

  const SettingsNavigator = createStackNavigator({
    Settings: {screen: MediaPlayer}
  });
  const Settings = createAppContainer(SettingsNavigator);

  const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Settings: Settings,
  });

  export default createAppContainer(TabNavigator);
