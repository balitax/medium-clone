import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class GSImage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Image {...this.props} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    container: {
      backgroundColor: '#e1e4e8',
    },
  });