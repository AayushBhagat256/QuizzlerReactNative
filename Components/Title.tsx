import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.fonts}>Quizzler</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    heading:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    fonts:{
        fontSize:34,
        fontWeight:'800',
        color:'black'
    }
})