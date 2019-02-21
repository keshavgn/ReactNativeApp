/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, NavigatorIOS, View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyDetails from './PropertyDetails';
import MediaPlayer from './MediaPlayer';

  const HomeNavigator = createStackNavigator({
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
