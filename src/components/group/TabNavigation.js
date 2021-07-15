import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import user from '../../assets/user.png';

class TabNavigation extends Component {
  render() {
    return (
      <View style={styles.Header}>
        <View style={styles.HeaderOne}>
          <TouchableOpacity>
            <View>
              <Image style={styles.User} source={user} />
            </View>
            <View>
              <Text>Phát trực tiếp</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderTwo}>
          <TouchableOpacity>
            <View>
              <Image style={styles.User} source={user} />
            </View>
            <View>
              <Text style={styles.Text}>Ảnh</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderThree}>
          <TouchableOpacity>
            <View>
              <Image style={styles.User} source={user} />
            </View>
            <View>
              <Text>Phòng họp mặt</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TabNavigation;
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  HeaderOne: {
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  User: {
    width: 30,
    height: 30,
  },
  Text: {
    fontSize: 12,
  },
  HeaderTwo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderThree: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
