import React, {Component} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Component
import Blog from '../Blog';
import SearchBlog from './SearchBlog';
// End Component
const Stack = createStackNavigator();
class TabNavigationBlog extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="SearchBlog" component={SearchBlog} />
      </Stack.Navigator>
    );
  }
}

export default TabNavigationBlog;
