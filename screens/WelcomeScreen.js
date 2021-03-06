import React, {useContext} from 'react';
import {Text, TextInput, View, StyleSheet, SafeAreaView, FlatList, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as PusherConst from '../config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import UserContext from '../context/UserContext';



const WelcomeScreen = ({navigation}) => {
    
    const {userCurent, setCurUser, dataUser, addUser} = useContext(UserContext);

    return (
        <SafeAreaView style={styles.screen}>
            
            <View style={styles.hero}>
                <Text style={styles.title}>Chào mừng đến với </Text>
                <Text style={styles.h1}> Funny Quiz</Text>
                
            </View>
            <View style={styles.bodyScreen}>
                <Text>
                    Xin mời nhập tên: 
                </Text>
                <View style={styles.formInput}>
                    <FontAwesome5 name="user" style={styles.iconStyle} />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle}
                        placeholder="Your name"
                        value={userCurent}

                        onChangeText={(userCurent) => {
                            setCurUser(userCurent);
                        }}
                        onEndEditing={() => {
                            addUser(userCurent);
                            
                        }}
                            
                    />
                    
                    
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.btnForm}
                        onPress={() => {
                            addUser(userCurent);
                            navigation.navigate('play');
                        }}>
                        <Text style={styles.btn}>Bắt đầu</Text>
                    </TouchableOpacity>
                      
                </View>
            </View>
            <View>
                <FlatList
                    data={dataUser}
                    keyExtractor={user => user.id}
                    renderItem={({ item }) => {
                    return <Text>{item.id} : {item.name}</Text>;
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btnForm:{
        fontSize: 12,
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: PusherConst.brand1,
        width: 120,
        height: 40,
    },
    btn: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 18,
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#dadafa',
        height: 40,
        width: '100%',
        flexDirection:'row',
        borderRadius: 3,
        alignItems: 'center',
        marginTop: 10
    },
    inputStyle: {
        height: 38,
        zIndex: 1,
        width: '100%',
        flexShrink: 1,
        paddingRight: 10,
    },
    iconStyle: {
        paddingHorizontal: 15,
    },
    screen: {
        flex: 1,
        backgroundColor: PusherConst.brand1,
    },
    hero: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        color: PusherConst.white,
        position: 'relative'
    },
    h1:{
        fontSize: PusherConst.h1,
        color: PusherConst.white,
        textTransform: 'uppercase',
        
    },
    title: {
        color: PusherConst.white,
        fontSize: 20,
        marginBottom: 5
    },
    text: {
        color: PusherConst.white,
        fontSize: 16,
    },
    txtButton: {
        color: PusherConst.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    imgHero:{

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
        height: 50,
        backgroundColor: PusherConst.brand1,
        color: PusherConst.white,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default WelcomeScreen;