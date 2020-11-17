import React, {useContext} from 'react';
import {Text, FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import UserContext from '../context/UserContext';

import * as PusherConst from '../config';

const RankingScreen = ({navigation}) => {

    const {dataUser} = useContext(UserContext);

    return <SafeAreaView style={styles.screen}>
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

export default RankingScreen;