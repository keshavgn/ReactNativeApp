/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react'
import { StyleSheet, Image, View, TouchableHighlight, FlatList, Text, Button, Dimensions } from 'react-native';
import PropertyDetails from './PropertyDetails';

class CollectionItem extends React.PureComponent {
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
                <View style={styles.itemContainer}>
                <View style={styles.rowContainer}>
                <Image style={styles.thumb} source={{ uri: item.img_url }} />
                <View style={styles.textContainer}>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.title}
                numberOfLines={2}>{item.title}
                </Text>
                </View>
                </View>
                </View>
                </TouchableHighlight>
                );
    }
}

export default class ColletionViewScreen extends Component<{}> {
    _keyExtractor = (item, index) => index;
    _renderItem = ({item, index}) => (
                                      <CollectionItem
                                      item={item}
                                      index={index}
                                      onPressItem={this._onPressItem}
                                      />
                                      );

    _onPressItem = (index) => {
      const listings = this.props.navigation.getParam('listings', []);
      this.props.navigation.navigate('Details', { property: listings[index]});
    };
    static navigationOptions = {
       title: 'Collection View',
     };
     render() {
       const listings = this.props.navigation.getParam('listings', []);
         return (
                 <FlatList style={styles.container}
                 data={listings}
                 numColumns={2}
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
                                  },
                                  textContainer: {
                                    flex: 1,
                                  },
                                  separator: {
                                    height: 1,
                                    backgroundColor: '#dddddd'
                                  },
                                  price: {
                                    fontSize: 22,
                                    fontWeight: 'bold',
                                    color: '#48BBEC'
                                  },
                                  title: {
                                    fontSize: 16,
                                    color: '#656565'
                                  },
                                  rowContainer: {
                                    padding: 5,
                                    margin:5,
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  },
                                  itemContainer: {
                                    width: Dimensions.get('window').width/2 - 8,
                                    marginLeft:5,
                                    marginTop:5,
                                    backgroundColor: 'white',
                                    borderRadius:10,
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    shadowColor: '#BCB8B8',
                                    shadowOpacity: 0.4,
                                    shadowRadius: 5,
                                  },
                                  container: {
                                    backgroundColor: '#F6F6F6'
                                  },
                                });
