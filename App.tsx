import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import Quiz from './Screens/Quiz'
import Result from './Screens/Result'

const App = () => {
  return (
    <View style={styles.container}>
      <Home/>
      <Quiz/>
      <Result/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
  }
})