import { StyleSheet, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../Components/Title'
import AnimatedSVGScreen from '../Components/Animation'
import LinearGradient from 'react-native-linear-gradient'

// @ts-ignore
const Home = ({ navigation }) => {
  const handleNav = () => {
    console.log("Navigate")
    navigation.navigate("Quiz")
  }
  return (
    <>
      <LinearGradient
        start={{ x: 0.5, y: 0.0 }}  // Start from the top center
        end={{ x: 0.5, y: 1.0 }}    // End at the bottom center
        locations={[0, 0.5, 1.2]}
        colors={['#24243e', '#302b63', '#0f0c29']}
        style={styles.scrollViewContent}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            <View>
              <Title />
              <View style={styles.bannerContainer}>
                <AnimatedSVGScreen />
              </View>

            </View>
            <TouchableOpacity onPress={handleNav} style={styles.heading}>
              <Text style={styles.fonts}>Start Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient >
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  bannerContainer: {
    height: 400,
    width: 300,
    justifyContent: 'center',
    // paddingTop:130,
    alignItems: 'center',
    alignSelf: 'center'
  },
  heading: {
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'green',
    backgroundColor: '#96c93d',
    width: 300,
    height: 50,
    borderRadius: 32
  },
  fonts: {
    fontSize: 24,
    fontWeight: '500',
    // color:'white'
    color: 'black'
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
  },
})