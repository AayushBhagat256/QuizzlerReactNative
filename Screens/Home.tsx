import { StyleSheet,Image, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../Components/Title'
import AnimatedSVGScreen from '../Components/Animation'

const Home = () => {
  return (
    <>
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <AnimatedSVGScreen/>
      </View>
      {/* <View>
        <Image 
        style={styles.banner}
        source={{uri:'https://static.wikia.nocookie.net/p__/images/5/5b/Hero.jpeg/revision/latest?cb=20190130172753&path-prefix=protagonist'}}/>
      </View> */}
    </View>
    <TouchableOpacity>
        <Text>Start Now</Text>
      </TouchableOpacity>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
    bannerContainer:{
        height:400,
        width:300,
        justifyContent:'center',
        // paddingTop:130,
        alignItems:'center',
        alignSelf:'center'
    }
})