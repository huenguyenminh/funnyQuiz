import React, {useContext} from 'react';
import {Text, FlatList, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import UserContext from '../context/UserContext';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as PusherConst from '../config';

const RankingScreen = ({navigation}) => {

    const {dataUser} = useContext(UserContext);

    return <SafeAreaView style={styles.screen}>
            <StatusBar barStyle="light-content" />
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('play')}>
                    <FontAwesome5 style={[styles.txtButton, {fontSize: 30}]} size={30} name='angle-left'/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn} style={styles.btn} onPress={ () => navigation.navigate('ranking')}>
                    <Text style={styles.txtRight}>
                    <FontAwesome5 style={styles.txtButton} name='ellipsis-v'/>
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bodyScreen}>
                <Text>Ranking Screen</Text>
                <FlatList
                    data={dataUser}
                    keyExtractor={user => user.id}
                    renderItem={({ item }) => {
                    return <Text>{item.id} : {item.name}</Text>;
                    }}
                />
            </View>

            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('welcome')}>
                    <Text style={styles.txtButton}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
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
});

export default RankingScreen;