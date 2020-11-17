import React, {useContext} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '../components/BottomNav';
import * as PusherConst from '../config';

import UserContext from '../context/UserContext';

const PlayScreen = ({navigation}) => {

    const {userCurent} = useContext(UserContext);

    return (
        <SafeAreaView  style={styles.screen}>
            <View  style={styles.bodyScreen}>
                <Text>{userCurent} is playing... </Text>
            </View>
            <View style={styles.bottomNav}>
                
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('category')}>
                    <Text style={styles.txtButton}>
                        Category
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} style={styles.btn} onPress={ () => navigation.navigate('ranking')}>
                    <Text style={styles.txtButton}>
                        Ranking
                    </Text>
                </TouchableOpacity>
                {/* <BottomNav/> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        height: 50,
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
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150
    },
    txtButton: {
        color: PusherConst.white,
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default PlayScreen;