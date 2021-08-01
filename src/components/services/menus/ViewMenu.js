import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// redux
import {connect} from 'react-redux';

//theme
import themeDark from '../../themes/dark';
import themeLight from '../../themes/light';

import avatarDefault from '../../../assets/avatar2.png';
import imageBackgroundDefault from '../../../assets/nen2.jpg';

class ViewMenu extends Component {
  render() {
    const {item, status} = this.props;
    const themes = status ? themeLight : themeDark;
    return (
      <View style={styles.viewMenu}>
        <Image
          style={styles.background}
          source={item.background || imageBackgroundDefault}
          resizeMode="cover"
        />
        <View style={styles.avatar}>
          <Image
            style={{
              width: 190,
              height: 190,
              borderRadius: 190 / 2,
            }}
            source={item.avatar || avatarDefault}
            resizeMode="cover"
          />
        </View>
        <Text style={[styles.title, {color: themes.theme.textColor}]}>
          {item.names}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewMenu: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    width: 400,
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    backgroundColor: '#ffffff',
    position: 'absolute',
    borderRadius: 200 / 2,
    bottom: -75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 25,
    bottom: -120,
  },
});
const mapStateToProps = state => {
  return {
    status: state.StatusOff,
  };
};
export default connect(mapStateToProps, null)(ViewMenu);
