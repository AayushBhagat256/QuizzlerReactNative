import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

// @ts-ignore
const Quiz = ({ navigation }) => {
  const handleNav = () => {
    console.log('submit')
    navigation.navigate("Result")
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
          <View >
            <View>

            </View>
            <View>
              <Text style={styles.questionfont}>This will be the question of the quiz</Text>
            </View>
            <View style={styles.optioncontainer}>
              <TouchableOpacity style={{ paddingTop: 20 }}>
                <Text style={styles.opttext}>Option 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingTop: 20 }}>
                <Text style={styles.opttext}>Option 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingTop: 20 }}>
                <Text style={styles.opttext}>Option 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingTop: 20 }}>
                <Text style={styles.opttext}>Option 4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              <View style={{ width: 60, backgroundColor: 'blue', height: 40, alignSelf: 'center', alignContent: 'center', justifyContent: 'center', borderRadius: 32 }}>
                <TouchableOpacity >
                  <Text style={styles.buttonContent}>Back</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: 60, backgroundColor: 'red', height: 40, alignSelf: 'center', alignContent: 'center', justifyContent: 'center', borderRadius: 32 }}>
                <TouchableOpacity >
                  <Text style={styles.buttonContent}>Quit</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: 80, backgroundColor: 'green', height: 40, alignSelf: 'center', alignContent: 'center', justifyContent: 'center', borderRadius: 32 }}>
                <TouchableOpacity onPress={handleNav} >
                  <Text style={styles.buttonContent}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient >
    </>
  )
}

export default Quiz

const styles = StyleSheet.create({
  questionfont: {
    color: 'white',
    fontSize: 23
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  optioncontainer: {
    paddingTop: 20,
  },
  opttext: {
    color: 'white',
    fontSize: 15
  },
  buttons: {
    paddingTop: 40,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonContent: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
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