import React, {Component} from 'react';
import {View, Text} from 'react-native';

class PhonesMenu extends Component {
  render() {
    const {phone} = this.props;
    console.log({phone});
    return (
      <View>
        <Text>{phone}</Text>
      </View>
    );
  }
}

export default PhonesMenu;
