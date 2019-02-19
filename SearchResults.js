/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text,
    Button,
} from 'react-native';
import PropertyDetails from './PropertyDetails';

class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.index);
    };

    render() {
        const item = this.props.item;
        const price = item.price_formatted.split(' ')[0];
        return (
                <TouchableHighlight
                onPress={this._onPress}
                underlayColor='#dddddd'>
                <View>
                <View style={styles.rowContainer}>
                <Image style={styles.thumb} source={{ uri: item.img_url }} />
                <View style={styles.textContainer}>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.title}
                numberOfLines={1}>{item.title}
                </Text>
                </View>
                </View>
                <View style={styles.separator}/>
                </View>
                </TouchableHighlight>
                );
    }
}

export default class SearchResults extends Component<{}> {
    _keyExtractor = (item, index) => index;
    _onBackPressed = () => {
        this.props.router.pop()
    };

    _renderItem = ({item, index}) => (
                                      <ListItem
                                      item={item}
                                      index={index}
                                      onPressItem={this._onPressItem}
                                      />
                                      );

    _onPressItem = (index) => {
        this.props.router.push.PropertyDetails({
                                  title: 'Property Details',
                                  property: this.props.listings[index]
                                  });
    };

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <View style={styles.button}>
                <Button
                onPress={this._onBackPressed}
                title='Back'
                />
              </View>
              <Text style={styles.navTitle}>
                  {this.props.title}
              </Text>
            </View>
                <FlatList
                data={this.props.listings}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                />
          </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
  marginTop: 50,
  flex: 1
  },
  navBar: {
  flexDirection: 'row',
  },
  button: {
  width: 60,
  flex: 1
  },
  navTitle: {
  fontSize: 30,
  color: '#000000',
  paddingLeft: 90,
  flex: 4
  },
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
