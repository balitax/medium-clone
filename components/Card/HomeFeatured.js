import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import SlideHome from './SlideHome';

export default class HomeFeature extends Component {


  render() {
    return (
      <ScrollView 
        scrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        style={{ backgroundColor: '#fff', height: 250}}
        >
          <SlideHome 
          thumbnail= "https://akcdn.detik.net.id/community/media/visual/2018/12/12/4b9b24e4-12b9-4b1f-866a-3da8571dcb5a_169.jpeg"
          titles="Facebook Needs Fewer Engineers, More Professors"
          user="Agus Cahyono"
          date="5 January"
          timeread="10"
          />
          <SlideHome 
           thumbnail= "https://akcdn.detik.net.id/community/media/visual/2018/12/12/4b9b24e4-12b9-4b1f-866a-3da8571dcb5a_169.jpeg"
          titles="Cara Mudah Belajar Ngoding, Ikuti 10 Cara Ini"
          user="Adam Jordan"
          date="5 December"
          timeread="2"
          />
          <SlideHome 
          thumbnail= "https://akcdn.detik.net.id/community/media/visual/2018/12/12/4b9b24e4-12b9-4b1f-866a-3da8571dcb5a_169.jpeg"
          titles="Bisa Ubah Sampah Jadi Bahan Bakar, Pemuda Ini Viral"
          user="John Doe"
          date="5 December"
          timeread="5"
          />
      </ScrollView>
    )
  }
}