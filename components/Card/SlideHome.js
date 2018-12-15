import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'
import { Card, CardItem, Container } from 'native-base';
import GSImage from '../CustomElement/GSImage';

export default class SlideHome extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#fff'}}>
          <Card style={styles.cardContainer} transparent >
          <CardItem cardBody>
            <View style={styles.imageThumbnailContainer}>
              <Image
                  source={{ uri: this.props.thumbnail }}
                  style={styles.imageThumbnail}
                  resizeMode="cover"
                  />
            </View>
          </CardItem>
          <CardItem style={{ marginTop: 10, borderRightColor: 'red' }}>
                  <Text style={styles.titleContent}>{this.props.titles}</Text>
          </CardItem>
          <CardItem style={{ marginTop: -10 }}>
                  <Text style={styles.userContent}>{this.props.user}</Text>
          </CardItem>
          <CardItem style={styles.cardItemFooter}>
                  <Text style={styles.cardItemFooterDate}>{this.props.date} .</Text>
                  <Text style={styles.cardItemFooterMinRead}>{this.props.timeread} min read</Text>
                  <Icon name="star" style={styles.cardItemFooterStar} size={13} />
          </CardItem>
        </Card>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: 10, marginRight: 10, borderRadius: 4, height: 220, width: 300,
            shadowColor: '#eee',
            backgroundColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowOpacity: 1.0,
            borderRightColor: '#eee',
            borderWidth: 1,
            shadowOpacity: 1.0
    }, 
    imageThumbnailContainer: {
        height: 100, width: null, flex: 1, borderTopLeftRadius: 4, borderTopRightRadius: 4,overflow: "hidden",  backgroundColor: '#e1e4e8',
    },
    imageThumbnail: {
        height: 80, width: '100%', flex: 1
    },
    titleContent: {
        fontWeight: '600', fontSize: 16
    },
    userContent: {
        fontWeight: '200', fontSize: 13
    },
    cardItemFooter: {
        marginTop: -15, marginBottom: 10, backgroundColor: 'transparent'
    },
    cardItemFooterDate: {
        fontWeight: '100', color: '#999', fontSize: 12
    },
    cardItemFooterMinRead: {
        fontWeight: '100', color: '#999', fontSize: 12, marginLeft: 10
    },
    cardItemFooterStar: {
        color:'#999', marginLeft: 18
    }
});