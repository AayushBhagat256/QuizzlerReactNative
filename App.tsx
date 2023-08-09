import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import Quiz from './Screens/Quiz'
import Result from './Screens/Result'

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <Home/>
      {/* <Quiz/> */}
      {/* <Result/> */}
    </View>
    </ScrollView>
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
  //   backgroundColor:'pink',
  // }
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
})