import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Blog from '../group/Blog';

class Menu extends Component {
  render() {
    return (
      <View style={styles.Menu}>
        <Blog />
      </View>
    );
  }
}
export default Menu;
const styles = StyleSheet.create({});
