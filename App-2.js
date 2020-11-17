import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import WelcomeScreen from './screens/WelcomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import PlayScreen from './screens/PlayScreen';
import RankingScreen from './screens/RankingScreen';

const MainStack = createStackNavigator();

const App2 = () => {
  debugger;
  return (
   <View>
     <Text>Funny Quizs</Text>
     {/* <NavigationContainer>
      <Stack.Navigator>
        <MainStack.Screen name="welcome" component={WelcomeScreen} />
        <MainStack.Screen name="category" component={CategoryScreen} />
        <MainStack.Screen name="play" component={PlayScreen} />
        <MainStack.Screen name="ranking" component={RankingScreen} />
      </Stack.Navigator>
    </NavigationContainer>   */}
   </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App2;
