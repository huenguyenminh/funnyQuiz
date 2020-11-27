import React from 'react';
import {Text, SafeAreaView, View, StyleSheet,TouchableOpacity} from 'react-native';

import * as PusherConst from '../config';


const CategoryScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.bodyScreen}>
                <View style={styles.hero}>
                    <Text>
                        Category Screen
                    </Text>
                </View>
            </View>
            
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('welcome')}>
                    <Text style={styles.txtButton}>
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('play')}>
                    <Text style={styles.txtButton}>
                        Play
                    </Text>
                </TouchableOpacity>
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
    btn:{
        height: 40,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
    },
    txtButton: {
        color: PusherConst.white,
        fontWeight: 'bold',
        fontSize: 20
    },
});


export default CategoryScreen;