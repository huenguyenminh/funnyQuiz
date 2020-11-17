import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import PlayScreen from './screens/PlayScreen';
import RankingScreen from './screens/RankingScreen';

import { UserProvider } from './context/UserContext';

const Stack = createStackNavigator();
const App = () => {
  
  return (
    <UserProvider>
      <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="category" component={CategoryScreen} />
        <Stack.Screen name="play" component={PlayScreen} />
        <Stack.Screen name="ranking" component={RankingScreen} />
      </Stack.Navigator>

      </NavigationContainer>
    </UserProvider>
      
    
  );
};

const styles = StyleSheet.create({});

export default App;
