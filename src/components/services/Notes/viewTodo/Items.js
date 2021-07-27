import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// icon
import IonIcon from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
class Items extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.item}>
        <IconEvilIcons name="heart" color="#000" size={25} />
        <Text style={styles.title}>{item}</Text>
        <IonIcon name="delete" color="#000" size={25} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 20,
  },
});

export default Items;
