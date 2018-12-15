import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ListArticle extends Component {
  render() {
    return (
      <View style={{ height: 170, marginBottom: 28 }}>
        <Grid>
            <Col size={70} style={styles.cols1}>
                <View style={{ paddingLeft: 18}}>
                    <Text style={{ fontWeight: '100', color: '#4a4a4a',fontSize: 15}}>
                        {this.props.category}
                    </Text>
                    <Text style={{marginTop: 8, fontWeight: '600', fontSize: 16, color: '#4a4a4a'}}>
                        { this.props.title}
                    </Text>
                    <Text style={{ marginTop: 10, fontWeight: '100', color: '#4a4a4a', fontSize: 11}}>
                        On the narrow definition of engineering per...
                    </Text>
                    <Text style={{ marginTop: 22, fontWeight: '100', color: '#000', fontSize: 14 }}>
                        Bhavya Kashyap
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Text style={{
                                color:'#999',
                                fontSize: 14,
                                fontWeight: '400',
                            }}>2 December .</Text>
                            <Text style={{
                                color:'#999',
                                fontSize: 14,
                                fontWeight: '400',
                            }}>4 min read</Text>
                            <Icon name="star" style={{
                                color:'#999',
                                 marginLeft: 10
                            }} size={13} />
                    </View>
                </View>
            </Col>
            <Col size={30} style={styles.cols2}>
                <Image source={require('../../assets/img/card.png')}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 4,
                        alignSelf: 'flex-end',
                        marginRight: 18,
                        marginTop: 30
                    }}
                />
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button transparent>
                        <Ionicon name="ios-bookmark" style={{
                            color:'#4a4a4a',
                            marginRight: 40
                        }} size={22}/>
                    </Button>
                    <Button transparent>
                        <Ionicon name="ios-more" style={{
                            color:'#4a4a4a'
                        }} size={22}/>
                    </Button>
                </View>
            </Col>
        </Grid>
        <View style = {{
            borderWidth: 0.5,
            borderColor: '#ddd',
            marginLeft: 18,
            marginRight: 18,
            marginTop: 0
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    cols1: {
        backgroundColor: '#fff'
    },
    cols2: { backgroundColor: '#fff' }
});