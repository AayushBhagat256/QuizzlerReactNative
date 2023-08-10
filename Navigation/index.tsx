import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../Screens/Home'
import Quiz from '../Screens/Quiz'
import Result from '../Screens/Result'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}

export default MyStack