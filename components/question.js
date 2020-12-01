import React, {useState, useEffect} from 'react';
import {Text, TextInput, Image,ImageBackground, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as PusherConst from '../config';

import ButtonFQ from '../components/Button';

const Question = ({question, id, currentQuestion, setCurrentQuestion, navigation, currentScore, setCurrentScore}) => {
    const [imgProp,setImgProp] = useState({width: 0, height: 0});
    const [answer,setAnswer] = useState('');
    const [isAnswering, setIsAnswering] = useState(false);
    const [isFinish, setIsFinish] = useState(false);

    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    
    // Get size images
    const qImgProps =  Image.getSize(question.qImg, (width, height) => {
    //    console.info({width, height});
       setImgProp({width: width, height: height})
    }); 

    // Check answer 
    function checkAnswer(answer){
        alert(answer);
        for (var i = 1; i <= question.aText.length; i++) {
            console.info('question.aText.length: ',question.aText.length);
            if(answer === question.aText[i]){
                console.info (i, ': true');
                setCurrentScore( setCurrentScore + 1 );
                return;
            }else{
                console.info(i, ': inCorrect');
                return;
            }
        }
    }

    useEffect( () => {
        if (id >= (PusherConst.numberQuestion - 1)){
            setIsFinish(true);
        }
      }, []);

    return <View style={{display: id === currentQuestion ? 'flex' : 'none' }}>
         {/* CAU HOI */}
        <View style={{display: !isAnswering ? 'flex' : 'none' }}>
           
            <Text style={styles.question}>
                Câu {id + 1}/{PusherConst.numberQuestion} :  
                &nbsp;{question.qText}
            </Text>
            <View style={styles.wrapImg}>
                <ImageBackground
                    source={{uri: question.qImg}} 
                    style={styles.Img}
                />
            </View>
            
            <Text style={styles.text}>
                Câu trả lời:  {}
            </Text>
            <View style={styles.formInput}>
                <FontAwesome5 name="smile" style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder=""
                    value={answer}
                    onChangeText={(answer) => {
                        setAnswer(answer);
                    }}
                    onEndEditing={() => {
                        setAnswer(answer);
                    }}
                />
            </View>
        </View>
        {/* CAU TRA LOI */}
        <View style={{display: isAnswering ? 'flex' : 'none' }}>
            <View>
                <Image style={styles.congrats}source={{uri: 'https://media0.giphy.com/media/xUOxf0akiVBK6R8jGU/giphy.gif'}}/>
            </View>
            <Text style={styles.question}>
                Đáp án câu {id + 1} :  
                &nbsp;{question.aText[0]}
            </Text>
            <Text>Cau tra loi cua ban: {answer}</Text>
            <View style={styles.wrapImg}>
                <ImageBackground
                    source={{uri: question.aImg}} 
                    style={styles.Img}
                />
            </View>
        </View>

        
        <View style={styles.bodyScreen}>
            <View style={styles.cta}>
                {/* Question/Answer Toggle */}
                <TouchableOpacity 
                    style={styles.btnForm}
                    onPress={() => {
                        if(!isAnswering){
                            checkAnswer(answer);
                            setIsAnswering(true);
                        }else{
                            setIsAnswering(false);
                        }
                    }}>
                        <FontAwesome5 style={styles.txtButton} size={12} name='unlock-alt'/>
                        <Text style={styles.txtButtonForm}>
                            {!isAnswering ? 'Xem Đáp Án' : 'Xem Lại Câu Hỏi'}
                        </Text>
                        
                </TouchableOpacity>
                {/* Play Next Button */}
                <TouchableOpacity 
                    style={ [styles.btnForm,{ display: !isFinish ? 'flex' : 'none'} ]}
                    onPress={() => {
                        setIsAnswering(false);
                        setCurrentQuestion(id + 1);
                    }}>
                        <FontAwesome5 style={styles.txtButton} size={12} name='unlock-alt'/>
                        <Text style={styles.txtButtonForm}>
                           Chơi tiếp 
                        </Text>
                        
                </TouchableOpacity>
                <ButtonFQ 
                    icon="award" 
                    copy="Bảng xếp hạng"
                    isFinish = {isFinish}
                    onPress={() => {
                        setIsAnswering(false);
                        console.log("navigation ", navigation);
                        navigation.navigate('ranking');
                    }}
                />
            </View>  
            
        </View>
                        
        

        
        {/* <Image
            source={{uri: question.qImg}} 
            style={{width: imgProp.width, height: imgProp.height}}
        /> */}
    </View>
};

const styles = StyleSheet.create({
    congrats: {
        width: '90%',
        height: 250
    },
    question: {
        marginBottom: 10,
        fontSize: PusherConst.text
    },
    wrapImg: {
        width: '100%',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        padding: 2,
        marginBottom: 10,
    },
    Img: {
        width: '100%',
        height: 300,
        borderRadius: 5,
    },
    text: {
        fontSize: PusherConst.text
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#dadafa',
        height: 50,
        width: '100%',
        flexDirection:'row',
        borderRadius: 3,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        height: 48,
        zIndex: 1,
        width: '100%',
        flexShrink: 1,
        paddingRight: 10,
        fontSize: PusherConst.text
    },
    iconStyle: {
        fontSize: 25,
        paddingHorizontal: 15,
    },
    cta: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    btnForm: {
        height: 40,
        borderRadius: 3,
        backgroundColor: PusherConst.brand1,
        color: PusherConst.white,
        padding: 8,
        paddingHorizontal: 15,
        textAlign: 'center',
        marginHorizontal: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0
    },
    txtButton: {
        color: PusherConst.white,
        marginRight: 3
    },
    txtButtonForm: {
        color: PusherConst.white,
        fontWeight: 'bold',
    }
});
export default Question;