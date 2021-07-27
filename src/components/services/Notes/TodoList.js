import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

// component
import Header from './Header';
import ViewTodo from './ViewTodo';


class TodoList extends Component {
  render() {
    return (
      <View style={styles.TodoList}>
        <Header />
        <ViewTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TodoList: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: '#EAE9EE',
  },
});

export default TodoList;
