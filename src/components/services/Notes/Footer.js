import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// redux
import {connect} from 'react-redux';

//theme
import themeDark from '../../themes/dark';
import themeLight from '../../themes/light';
// selectors
import {getCountTodoActive} from '../../../selectors';

class Footer extends Component {
  onActive = event => {
    const {onActive} = this.props;
    onActive(event);
  };
  render() {
    const {status, active, countTodo} = this.props;
    const themes = status ? themeLight : themeDark;
    return (
      <View style={[styles.Footer, {backgroundColor: themes.theme.input}]}>
        <Text
          style={{
            fontSize: 16,
            color: themes.theme.backgroundBT,
            fontWeight: 'bold',
            padding: 10,
          }}>
          {countTodo} items left
        </Text>
        <TouchableOpacity
          onPress={() => this.onActive('All')}
          style={styles.Button}>
          <Text
            style={[
              active === 'All' && styles.active,
              {
                fontSize: 16,
                color: themes.theme.backgroundBT,
                fontWeight: 'bold',
                padding: 10,
              },
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.onActive('Active')}
          style={styles.Button}>
          <Text
            style={[
              active === 'Active' && styles.active,
              {
                fontSize: 16,
                color: themes.theme.backgroundBT,
                fontWeight: 'bold',
                padding: 10,
              },
            ]}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.onActive('Completed')}
          style={styles.Button}>
          <Text
            style={[
              active === 'Completed' && styles.active,
              {
                fontSize: 16,
                color: themes.theme.backgroundBT,
                fontWeight: 'bold',
                padding: 10,
              },
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    alignItems: 'center',
  },
  Button: {
    padding: 10,
    alignItems: 'center',
  },
  active: {
    borderWidth: 1,
    borderRadius: 5,
  },
});
const mapStateToProps = state => {
  return {
    status: state.StatusOff,
    countTodo: getCountTodoActive(state),
  };
};
export default connect(mapStateToProps, null)(Footer);
