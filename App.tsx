import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState} from 'react'
import Home from './Screens/Home'
import Quiz from './Screens/Quiz'
import Result from './Screens/Result'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './Navigation'
import 'react-native-gesture-handler';
import ScoreContext from './Context/ScoreContext'



const App = () => {
  // const [score, setScore] = useState(0);
  return (
    
    // <LinearGradient
    // start={{ x: 0.5, y: 0.0 }}  // Start from the top center
    // end={{ x: 0.5, y: 1.0 }}    // End at the bottom center
    // locations={[0, 0.5, 1.2]}
    // colors={['#24243e', '#302b63', '#0f0c29']}
    //   style={styles.scrollViewContent}
    // >
      // <ScrollView contentContainerStyle={styles.scrollViewContent}>
      // <ScoreContext.Provider value={{ score, setScore }}>
        <NavigationContainer>
       
          
       <MyStack  />
     
   {/* <Home/> */}
   {/* <Quiz /> */}
   {/* <Result/> */}
 
 </NavigationContainer>
      // </ScoreContext.Provider>
     
      
    
  )
}

export default App

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    color:'white',
    justifyContent: 'center',
  },
})