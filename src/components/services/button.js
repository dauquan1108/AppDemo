import React, {Component} from 'react';
import {View, StyleSheet, Button, Alert, ScrollView} from 'react-native';

class Buttons extends Component {
  onButtons = (title, name) => {
    const {onButton} = this.props;
    onButton(title, name);
  };
  render() {
    return (
      <View style={styles.button}>
        <Button
          title="Button1"
          color="#f194ff"
          onPress={() => this.onButtons('Button1', 'quan1')}
        />
        <Button
          title="Button2"
          color="#f194ff"
          onPress={() => this.onButtons('Button2', 'quan2')}
        />
        <Button
          title="Button3"
          color="#f194ff"
          onPress={() => this.onButtons('Button3', 'quan3')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Buttons;
