import React, {Component} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Component
import Home from '../services/Home';
import Friends from '../services/Friends';
// End Component
const Stack = createStackNavigator();
class SettingsStackScreen extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OverView" component={Friends} />
      </Stack.Navigator>
    );
  }
}

export default SettingsStackScreen;
