import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class BookmarkTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="bookmark" color={tintColor} size={30} />
    )
  }

  render() {
    return (
      <View>
        <Text> BOOKMARKS </Text>
      </View>
    )
  }
}