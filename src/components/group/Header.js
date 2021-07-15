import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';


import facebook from '../../assets/facebook.jpg';
import Seach from '../../assets/seach.png';
import Messenger from '../../assets/messenger.png';

class Header extends Component {
  render() {
    return (
      <View style={styles.Header}>
        <View style={styles.HeaderLeft}>
          <Image style={styles.Facebook} source={facebook} />
        </View>
        <View style={styles.HeaderRight}>
          <TouchableOpacity>
            <View style={styles.HeaderRight1}>
              <Image style={styles.Messenger} source={Seach} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.HeaderRight2}>
              <Image style={styles.Messenger} source={Messenger} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
const styles = StyleSheet.create({
  Header: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  HeaderLeft: {
    flex: 5,
    justifyContent: 'flex-start',
  },
  Facebook: {
    width: 100,
    height: 25,
  },
  HeaderRight: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  HeaderRight1: {
    backgroundColor: '#727074bf',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  HeaderRight2: {
    backgroundColor: '#727074bf',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Messenger: {
    width: 18,
    height: 18,
  },
});
