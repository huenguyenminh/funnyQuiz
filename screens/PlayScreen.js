import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, StatusBar, Slider} from 'react-native';
// import {Slider} from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as PusherConst from '../config';

import UserContext from '../context/UserContext';
import Question from '../components/question';

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const PlayScreen = ({navigation}) => {

    const {userCurent} = useContext(UserContext);
    const [questions, setQuestion] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [currentScore, setCurrentScore] = useState(0);

    useEffect( () => {
        try{
            
          const fetchData = async () => {
            // const url =  `http://localhost:3000/users`;
            const url = 'https://funny-quiz.herokuapp.com/users'
            const response = await fetch(url);
            const jsonData = await response.json();
            const copyData = await shuffle([...jsonData]);
            setQuestion(copyData.slice(0, PusherConst.numberQuestion));
          };
          console.info('hello 1')
          fetchData();
        } catch (err){
          setErrorMessage(err.message);
        }
        
      }, []);

    const renderItem = ({item, index}) => {
        return <Question 
            navigation={navigation} 
            question={item} 
            id={index} 
            currentQuestion={currentQuestion} 
            setCurrentQuestion={setCurrentQuestion}
            currentScore={currentScore} 
            setCurrentScore={setCurrentScore}
        />
    }

    function BackQuestion(currentQuestion){
        console.log("current question ==>> ", currentQuestion);
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1)
        }
        
    }

    return (
        <SafeAreaView  style={styles.screen}>
            <StatusBar barStyle="light-content" />
            <View style={styles.bottomNav}>
                <TouchableOpacity style={[styles.btn]} onPress={ () => BackQuestion(currentQuestion)}>
                    <FontAwesome5 style={[styles.txtButton, {fontSize: 30,opacity: currentQuestion >= 1 ? 1 : 0.5}]} size={30} name='angle-left'/>
                </TouchableOpacity>
                
                
                <Text style={[styles.txtRight, styles.namePlayer]} numberOfLines={1}>
                    {userCurent}
                </Text>

                <TouchableOpacity style={styles.btn} style={styles.btn} onPress={ () => navigation.navigate('ranking')}>
                    <Text style={styles.txtRight}>
                    <FontAwesome5 style={styles.txtButton} name='ellipsis-v'/>
                    </Text>
                </TouchableOpacity>
                {/* <BottomNav/> */}
            </View>
            <View  style={styles.bodyScreen}>
                <Slider
                    style={styles.progress}
                    minimumValue={0}
                    maximumValue={PusherConst.numberQuestion}
                    minimumTrackTintColor={PusherConst.brand2}
                    maximumTrackTintColor={PusherConst.brand1}
                    disabled = {true}
                    value = {currentQuestion + 1}
                />
                <FlatList
                    data={questions}
                    renderItem={renderItem}
                    keyExtractor={(question) => question.id}
                />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    progress: {
        width: '100%',
        height: 10,
        borderRadius: 5,
        marginVertical: 20,
        marginBottom: 30
    },
    namePlayer: {
        paddingHorizontal: 20,
        paddingTop: 10
    },
    screen: {
        flex: 1,
        backgroundColor: PusherConst.brand1,
    },
    bodyScreen: {
        backgroundColor: PusherConst.white,
        flex: 1,
        padding: 10,
        flexShrink: 1
    },
    bottomNav: {
        width: '100%',
        padding: 10,
        backgroundColor: PusherConst.brand1,
        color: PusherConst.white,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: PusherConst.white,
        fontSize: 16,
    },
    btn:{
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        color: PusherConst.white,
        display: 'flex'
    },
    txtButton: {
        color: PusherConst.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    txtRight: {
        color: PusherConst.white,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default PlayScreen;