/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, FlatList, Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyDetails from './PropertyDetails';
import MediaPlayer from './MediaPlayer';
import MapsScreen from './MapsScreen';
import CollectionScreen from './CollectionViewScreen';

  const HomeNavigator = createStackNavigator({
    Home: {screen: HomeScreen },
    Map: {screen: MapsScreen},
    Search: {screen: SearchPage},
    Results: {screen: SearchResults},
    Details: {screen: PropertyDetails},
    Collections: {screen: CollectionScreen}
  });
  const Home = createAppContainer(HomeNavigator);

  const SettingsNavigator = createStackNavigator({
    Settings: {screen: MediaPlayer}
  });
  const Settings = createAppContainer(SettingsNavigator);

  const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          return <Image
           source={require('./Resources/home.png')}
           style={{ height: 30, width: 30}}/>;
        },
      })
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          return <Image
           source={require('./Resources/more.png')}
           style={{ height: 30, width: 30}}/>;
        },
      })
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  });

  export default createAppContainer(TabNavigator);
