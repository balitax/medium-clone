import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Container, Grid } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class HomeList extends Component {

  render() {
    return (
        <Container style={{ height: 220 }}>
            <Card transparent>
                <CardItem transparent>
                    <View style={{flex: 1,
                        flexDirection: 'column'}}>

                        <View>
                            <Text style={{ fontWeight: '100', color: '#4a4a4a',fontSize: 15 }}>TECHNOLOGY</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{flexDirection: 'column', width: 260}}>
                                <Text style={{marginTop: 8, fontWeight: '600', fontSize: 18, color: '#4a4a4a', width: 250 }}>
                                    You Can't Build an iPhone with Python
                                </Text>
                                <Text style={{ marginTop: 10, fontWeight: '100', color: '#4a4a4a', fontSize: 12 }}>
                                    On the narrow definition of engineering per...
                                </Text>

                                <Text style={{ marginTop: 22, fontWeight: '100', color: '#000', fontSize: 14 }}>
                                    Bhavya Kashyap
                                </Text>

                                <View style={{ flexDirection: 'row', marginTop: 10}}>
                                    <Left>
                                        <Text style={{
                                            color:'#999',
                                            fontSize: 14,
                                            fontWeight: '100',
                                        }}>2 December .</Text>
                                        <Text style={{
                                            color:'#999',
                                            fontSize: 14,
                                            fontWeight: '100',
                                        }}>4 min read</Text>
                                        <Icon name="star" style={{
                                            color:'#999', marginLeft: 10
                                        }} size={13} />
                                    </Left>
                                </View>

                                
                            </View>
                            <View>
                                <Image source={require('../../assets/img/card.png')}
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 4,
                                        justifyContent:'flex-end'
                                    }}
                                    />

                                <View style={{ flexDirection: 'row', marginTop: 35, right: 10, justifyContent: 'flex-end' }}>
                                    <Button transparent>
                                        <Ionicon name="ios-bookmark" style={{
                                            color:'#4a4a4a', marginRight: 10,
                                        }} size={18}/>
                                    </Button>
                                    <Button transparent>
                                        <Ionicon name="ios-more" style={{
                                            color:'#4a4a4a'
                                        }} size={18}/>
                                    </Button>
                                </View>
                                    
                                    
                            </View>
                        </View>

                        <View style = {{
                            borderWidth: 0.5,
                            borderColor: '#ddd',
                            marginLeft: 0,
                            marginRight: 8,
                            marginTop: 18
                        }} />

                    </View>

                </CardItem>
            </Card>
        </Container>
    )
  }
}