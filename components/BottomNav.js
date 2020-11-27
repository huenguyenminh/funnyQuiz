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
import PlayScreen from '../screens/PlayScreen';
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'play') {
            iconName = focused
              ? 'user'
              : 'user-tie';
          } else if (route.name === 'ranking') {
            iconName = focused ? 'play' : 'ad';
          }

          // You can return any component that you like here!
          return <FontAwesome5Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="play"  component={PlayScreen} />
      <Tab.Screen name="ranking" component={RankingScreen} />
      <Tab.Screen name="category" component={CategoryScreen} />
  </Tab.Navigator>  
  );
};

const styles = StyleSheet.create({
  
});

export default BottomNav;
