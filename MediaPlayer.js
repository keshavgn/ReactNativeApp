/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    NativeAppEventEmitter,
    Button,
    Alert,
    NativeModules,
    Platform
} from 'react-native';


export default class MediaPlayer extends Component <{}> {
  static navigationOptions = {
    title: 'Settings',
  };

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.description}>
                        Search for houses to buy!
                    </Text>
                <Button
                onPress={() =>
                Platform.OS === 'ios' ? NativeModules.NativeManager.showNativeView() : Alert.show("Android Native View: Coming soon...")
                }
                title="Present Native View"
                />
                </View>
                );
    }
    componentDidMount() {
        // Add Event Listener for SongPlaying event from MediaController
        NativeAppEventEmitter.addListener('SongPlaying', (songName) => Alert.alert(songName))
    }
}

const styles = StyleSheet.create({
                                 description: {
                                 marginBottom: 20,
                                 fontSize: 18,
                                 textAlign: 'center',
                                 color: '#656565'
                                 },
                                 container: {
                                 padding: 30,
                                 marginTop: 65,
                                 alignItems: 'center'
                                 },
                                 });
