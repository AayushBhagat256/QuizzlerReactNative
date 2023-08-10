import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import he from 'he'
import { useNavigation } from '@react-navigation/native';
import Loading from '../Components/Loading';

type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
type Option = string; // Define the type of options
// @ts-ignore
const shuffleFun = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// @ts-ignore
const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [quest, setQuest] = useState<number>(0)
  const [options, setOptions] = useState([])
  const [score,setScore] = useState<number>(0)
  const handleNav = () => {
    console.log('submit')
    // navigation.navigate("Result")
    console.log("The quest before" + quest)
    setQuest(quest + 1)
    console.log("The quest after" + quest)
    // @ts-ignore
    setOptions(genrateOptionsAndShuffle(questions[quest+1]))

  }
  // @ts-ignore
  const handleSeletedOption = (_option) => {
    console.log(_option)
    console.log(_option===questions[quest].correct_answer)
    if(quest!==4){
      if(_option===questions[quest].correct_answer){
        setScore(score+10);
      }
      console.log('submit')
      // navigation.navigate("Result")
      console.log("The quest before" + quest)
      setQuest(quest + 1)
      console.log("The quest after" + quest)
      // @ts-ignore
      setOptions(genrateOptionsAndShuffle(questions[quest+1]))
    }
    if(quest==4){
      navigation.navigate("Result")
    }
  }

  const getQuiz = async () => {
    console.log("getQuiz")
    const url = 'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data.results)
    setQuestions(data.results)
    // @ts-ignore
    setOptions(genrateOptionsAndShuffle(data.results[0]))

    console.log(questions[0].category)

  }
  // @ts-ignore
  const genrateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    console.log(options)
    // @ts-ignore
    // setOptions(shuffleFun(options))
    shuffleFun(options)
    return options
  }
  useEffect(
    () => {
      getQuiz()
    }, []
  )
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
            {
              questions.length > 0 ? (
                <>
                  <View >
                    <View>
                      <Text style={styles.questionfont}>{
                        // @ts-ignore
                        he.decode(questions[quest].question)
                      }</Text>
                    </View>
                    <View style={styles.optioncontainer}>
                      <TouchableOpacity onPress={()=>handleSeletedOption(options[0])} style={{ paddingTop: 20 }}>
                        <Text style={styles.opttext}>{
                          // @ts-ignore
                          (options[0])
                        }</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>handleSeletedOption(options[1])} style={{ paddingTop: 20 }}>
                        <Text style={styles.opttext}>{
                          // @ts-ignore
                          (options[1])
                        }                 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>handleSeletedOption(options[2])} style={{ paddingTop: 20 }}>
                        <Text style={styles.opttext}>{
                          // @ts-ignore
                          (options[2])
                        }</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>handleSeletedOption(options[3])} style={{ paddingTop: 20 }}>
                        <Text style={styles.opttext}>{
                          // @ts-ignore
                          (options[3])
                        }</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttons}>
                      <View style={{ width: 60, backgroundColor: 'red', height: 40, alignSelf: 'center', alignContent: 'center', justifyContent: 'center', borderRadius: 32 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                          <Text style={styles.buttonContent}>Quit</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: 80, backgroundColor: 'green', height: 50, alignSelf: 'center', alignContent: 'center', justifyContent: 'center', borderRadius: 32 }}>
                        {
                          quest !== 4 && (<>
                            <TouchableOpacity onPress={handleNav} >
                              <Text style={styles.buttonContent}>Next</Text>
                            </TouchableOpacity>
                          </>)
                        }
                        {
                          quest == 4 && (<>
                            <TouchableOpacity onPress={() => navigation.navigate("Result")} >
                              <Text style={styles.buttonContent}>Show Results</Text>
                            </TouchableOpacity>
                          </>)
                        }
                      </View>
                    </View>
                  </View>
                </>
              ) : (<>
                <Loading />
              </>)
            }
          </View>
        </ScrollView>
      </LinearGradient >
    </>
  )
}

export default Quiz

// ... (styles)


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
    paddingHorizontal: 12
  },
  opttext: {
    color: 'white',
    fontSize: 15,
    backgroundColor: '#34A0A4',
    width: 'auto',
    height: 50,
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 12,
    textAlignVertical: 'center',

  },
  buttons: {
    paddingTop: 40,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between'
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