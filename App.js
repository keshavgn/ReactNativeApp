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
import Router from 'react-native-easy-router';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyDetails from './PropertyDetails';

  type Props = {};
  const routes = { SearchPage, SearchResults, PropertyDetails };
  const App = () => <Router routes={routes} initialRoute="SearchPage" />;
  export default App;
