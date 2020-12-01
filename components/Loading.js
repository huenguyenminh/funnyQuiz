import React from 'react';
import {Image,  View, StyleSheet} from 'react-native';
import * as PusherConst from '../config';

const Loading = () => {
    return <View style={styles.loadingWrap}>
        <Image style={styles.spin} source={require('../assets/images/spin.gif')}/>
    </View>;
}

const styles = StyleSheet.create({
    loadingWrap: {
        width: '100%',
        height: 80,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spin: {
        width: 50,
        height: 50
    }

});

export default Loading;