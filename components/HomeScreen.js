import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Platform } from 'react-native'
import { Header, Container, Left, Right, Body } from 'native-base';
import headerLogo from '../assets/img/headerLogo.png'
import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeTab from './TabItems/HomeTab'
import BookmarkTab from './TabItems/BookmarkTab';
import CreateTab from './TabItems/CreateTab';
import ActivityTab from './TabItems/ActivityTab';
import UserTab from './TabItems/UserTab';
 

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
          <Header style={{borderBottomWidth: 0, backgroundColor: '#fff'}}>
              <Left>
                  <Icon name="headphones" size={25} style={{ color: '#555', paddingLeft: 10 }} />
              </Left>
              <Body>
                  <Image source={headerLogo} style={{ tintColor: '#000'}}  />
              </Body>
              <Right>
                <Icon name="search" size={25} style={{ color: '#555', paddingRight: 10  }} />
              </Right>
          </Header>
          <AppontainerBarBottom  />
      </Container>
    )
  }
}

const AppTabNavigator = createBottomTabNavigator({
    Home: HomeTab,
    Bookmark: BookmarkTab,
    Create: CreateTab,
    Activity: ActivityTab,
    User: UserTab
  }, {
      animationEnabled: true,
      swipeEnabled: true,
      lazy: true,
      tabBarOptions: 'bottom',
      tabBarOptions: {
        style: {
            ...Platform.select({
              android: {
                backgroundColor: 'black'
              },
              ios: {
                  backgroundColor: 'black'
              }
            })
        },
        activeTintColor: 'white',
        inactiveTintColor: '#aaa',
        showLabel: false,
        showIcon: true
      }
    });
  
  const AppontainerBarBottom = createAppContainer(AppTabNavigator);
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBar: {
        backgroundColor: 'black'
    }
});