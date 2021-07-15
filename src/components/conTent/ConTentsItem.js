import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import b1 from '../../assets/b1.jpg';

class ConTentsItem extends Component {
  render() {
    const {route} = this.props;
    return (
      <ScrollView>
        <View style={styles.ConTent}>
          <View style={styles.Khoi1}>
            <Image
              resizeMode={'cover'}
              style={styles.Images}
              source={b1 || route.params.item.images}
            />
          </View>
          <View style={styles.Khoi2}>
            <Text>ID: {0 || route.params.item.id}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  ConTent: {
    backgroundColor: 'rgb(176, 224, 230)',
    flex: 1,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    paddingTop: 50,
  },
  Khoi1: {
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  Images: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  Khoi2: {},
});
export default ConTentsItem;
