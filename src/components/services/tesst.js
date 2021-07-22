import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Tesst extends Component {
  render() {
    const {item} = this.props;
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  }
}

export default Tesst;
