import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const CowfundsButton = ({ navigation }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ViewAllCowfunds')}>
    <Text style={styles.buttonText}>View All Cowfunds</Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="ViewAllCowfunds" component={ViewAllCowfundsScreen} />
        <BottomTab.Screen name="CowfundsButton" component={CowfundsButton} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  }
});

export default App;
