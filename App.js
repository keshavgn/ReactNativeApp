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
import SearchPage from './SearchPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<{}> {
    render() {
        return (
                <NavigatorIOS
                style={styles.container}
                initialRoute={{
                title: 'Property Finder',
                component: SearchPage,
                }}/>
                );
    }
}

const styles = StyleSheet.create({
                                 description: {
                                 fontSize: 18,
                                 textAlign: 'center',
                                 color: '#656565',
                                 marginTop: 100,
                                 },
                                 container: {
                                 flex: 1,
                                 },
                                 });