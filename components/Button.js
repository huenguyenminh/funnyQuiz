import React from 'react';
import {Text, TextInput, Image,  View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as PusherConst from '../config';

const ButtonFQ = ({icon,copy, isFinish, onPress}) => {
    return <TouchableOpacity 
            style={ [styles.btnForm,{ display: isFinish ? 'flex' : 'none'} ]}
            onPress={onPress}
            >
            <FontAwesome5 style={styles.txtButton} size={12} name={icon}/>
            <Text style={styles.txtButtonForm}>
                {copy}
            </Text>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
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

export default ButtonFQ;