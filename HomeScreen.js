/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, NavigatorIOS, View, TouchableHighlight, FlatList, Image} from 'react-native';
import Collections from './Resources/collection_view_response.json';

class HomeItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.index);
    };

    render() {
        const item = this.props.item;
        return (
                <TouchableHighlight
                onPress={this._onPress}
                underlayColor='#dddddd'>
                <View>
                <View style={styles.rowContainer}>
                <View style={styles.textContainer}>
                <Text style={styles.title}> {item} </Text>
                </View>
                <View>
                  <Image source={require('./Resources/arrow.png')} style={styles.image}/>
                </View>
                </View>
                <View style={styles.separator}/>
                </View>
                </TouchableHighlight>
                );
    }
}

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  _keyExtractor = (item, index) => index;
  _renderItem = ({item, index}) => (
                                    <HomeItem
                                    item={item}
                                    index={index}
                                    onPressItem={this._onPressItem}
                                    />
                                    );

  _onPressItem = (index) => {
    if (index == 0) {
      this.props.navigation.navigate('Search');
    } if (index == 1) {
      this.props.navigation.navigate('Map');
    } else {
      this.props.navigation.navigate('Collections', {listings: Collections.response.listings});
    }
  };
   render() {
     const listings = ['Search', 'Maps', 'Collection View']; //Dic = [{title: 'Search'}]
       return (
               <FlatList
               data={listings}
               keyExtractor={this._keyExtractor}
               renderItem={this._renderItem}
               />
               );
   }
}

const styles = StyleSheet.create({
                                 thumb: {
                                 width: 80,
                                 height: 80,
                                 marginRight: 10
                                 },
                                 textContainer: {
                                 flex: 1
                                 },
                                 separator: {
                                 height: 1,
                                 backgroundColor: '#dddddd'
                                 },
                                 price: {
                                 fontSize: 25,
                                 fontWeight: 'bold',
                                 color: '#48BBEC'
                                 },
                                 title: {
                                 fontSize: 20,
                                 color: '#656565'
                                 },
                                 rowContainer: {
                                 flexDirection: 'row',
                                 padding: 10
                                 },
                                 });
