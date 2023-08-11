
import React , {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import ScoreContext from '../Context/ScoreContext'; // Import the context you created

type RootStackParamList = {
  Result: { score: number }; // Define your route params here
};

type ResultRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Result'>;
  route: ResultRouteProp;
};

const Result: React.FC<Props> = ({ navigation}) => {
  const { score } = useContext(ScoreContext) as {
    score: number
  };

  return (
    <View>
      <Text>This is results screen your score is {score}</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
