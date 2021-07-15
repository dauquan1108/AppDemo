import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Component
import MyTabs from './src/components/TabNavigator/MyTabs';
//end component

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}

export default App;
