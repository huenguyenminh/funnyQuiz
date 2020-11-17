import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from '../screens/WelcomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import RankingScreen from '../screens/RankingScreen';
const BottomStack = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
        <Text>Bottom stack</Text>
        <BottomStack.Navigator>
          <BottomStack.Screen name="welcome" component={WelcomeScreen} />
          <BottomStack.Screen name="ranking" component={RankingScreen} />
          <BottomStack.Screen name="category" component={CategoryScreen} />
        </BottomStack.Navigator>  
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default BottomNav;
