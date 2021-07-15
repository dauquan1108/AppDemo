import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
class HorizontalItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.HorizontalItem}>
          <View style={styles.ImgContents}>
            <Image style={styles.Img} source={item.images} />
          </View>
          <View style={styles.Content}>
            <Text numberOfLines={1} style={styles.Text}>
              {item.text}
            </Text>
            <Text>Dau Xuan Quan</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  HorizontalItem: {
    width: 130,
    height: 170,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    marginLeft: 5,
  },
  ImgContents: {},
  Img: {
    width: 130,
    height: 140,
  },
  Content: {},
  Text: {
    margin: 5,
    fontSize: 11,
    textAlign: 'center',
  },
});
export default HorizontalItem;
