import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icons from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import IonIcon from 'react-native-vector-icons/AntDesign';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

//Component
import Home from '../services/Home';
import Friends from '../services/Friends';
import Gallery from '../services/Gallery';
import Menu from '../services/menus/Menu';
import Notes from '../services/Notes/TodoList';
import TabNavigationBlog from '../../components/group/blog/TabNavigationBlog';

import home from '../../assets/home.png';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      barStyle={{backgroundColor: '#040405'}}
      labelStyle={{fontSize: 20, fontWeight: 'bold'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image style={styles.tinyLogo} source={home} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color}) => (
            <Icons name={'user-friends'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Gallery}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({color}) => (
            <IonIcon name={'message1'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarLabel: 'Note',
          tabBarIcon: ({color}) => (
            <IconSimpleLineIcons name={'note'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <IonIcons name={'md-menu-outline'} color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 45,
    height: 45,
  },
});
