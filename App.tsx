import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import Quiz from './Screens/Quiz'
import Result from './Screens/Result'
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  return (

    <LinearGradient
    start={{ x: 0.5, y: 0.0 }}  // Start from the top center
    end={{ x: 0.5, y: 1.0 }}    // End at the bottom center
    locations={[0, 0.5, 1.2]}
    colors={['#24243e', '#302b63', '#0f0c29']}
      style={styles.scrollViewContent}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
        {/* <Home/> */}
        <Quiz />
        {/* <Result/> */}
      </View>
    </ScrollView>
      </LinearGradient >
    
  )
}

export default App

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   paddingTop:40,
  //   textAlign:'center',
  //   // height:'auto',
  //   // minHeight:50,
  //   backgroundColor:'pink', background-color: #0cbaba;
  // background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);

  // }
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    // backgroundColor: '#0cbaba',
    // backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
    alignItems: 'center',
    color:'white',
    justifyContent: 'center',
  },
})