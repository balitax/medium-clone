import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import HomeFeature from '../Card/HomeFeatured';
import HomeList from '../Card/HomeList';
import ListArticle from '../Card/ListArticle';
import PTRView from 'react-native-pull-to-refresh';

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="home" color={tintColor} size={30} />
    )
  }

  _refresh() {
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve()
        alert('Updated')
      }, 
        2000)
    });
  };

  render() {
    return (
      <PTRView onRefresh={this._refresh} >
          <ScrollView 
          scrollEnabled={true}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{ backgroundColor: '#fff', marginTop: 18,}}
          >
            <HomeFeature />
            <ListArticle 
            category='TECHNOLOGY'
            title="You Can't Build an iPhone with Python"
            />
            <ListArticle 
            category='SOCIAL'
            title="You Can't Build an iPhone with Python"
            />
            <ListArticle 
            category='PROGRAMMING'
            title="You Can't Build an iPhone with Python"
            />
            <ListArticle 
            category='PROGRAMMING'
            title="You Can't Build an iPhone with Python"
            />
            <ListArticle 
            category='SOCIAL'
            title="You Can't Build an iPhone with Python"
            />
            <ListArticle 
            category='PROGRAMMING'
            title="You Can't Build an iPhone with Python"
            />
            <ListArticle 
            category='PROGRAMMING'
            title="You Can't Build an iPhone with Python"
            />

        </ScrollView>
      </PTRView>
    )
  }
}