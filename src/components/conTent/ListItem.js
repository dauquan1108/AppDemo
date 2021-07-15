import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
class ListItem extends Component {
  render() {
    const {onPress} = this.props;
    const {item} = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.TestNative}>
          <View style={styles.container}>
            <Image style={styles.Img} source={item.images} />
            <View style={styles.Content}>
              <Text numberOfLines={2} style={styles.Text}>
                {item.text}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  // khoi
  TestNative: {},
  container: {
    width: 197,
    height: 300,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: '#f5fffa',
    overflow: 'hidden',
    // shadow trong reactNative
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  Img: {
    resizeMode: 'cover',
    width: 197,
    height: 250,
  },
  Content: {
    width: 197,
    height: 50,
  },
  Text: {
    padding: 5,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  // end khoi
});
export default ListItem;
