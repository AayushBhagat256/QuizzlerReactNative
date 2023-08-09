import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import MyLottieAnimation from '../Assets/quiz.json'; // Replace with your JSON file

const AnimatedSVGScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
        source={MyLottieAnimation}
        autoPlay
        loop
        style={{ width: 400, height: 400 }}
        resizeMode='contain'
        // @ts-ignore
        renderSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </View>
  );
};

export default AnimatedSVGScreen;
