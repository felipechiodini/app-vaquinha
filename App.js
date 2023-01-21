import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CowfundScreen from './screens/CowfundScreen';
import ContributorScreen from './screens/ContributorScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cowfunds" component={CowfundScreen} />
        <Tab.Screen name="Contributors" component={ContributorScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
