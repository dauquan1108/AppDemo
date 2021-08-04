import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
// redux
import {connect} from 'react-redux';
//icon
import IconIcons from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../actions';
//theme
import themeDark from '../../themes/dark';
import themeLight from '../../themes/light';

class ViewSetting extends Component {
  checkStatus = () => {
    const {checkStatus} = this.props;
    checkStatus();
  };
  render() {
    const {status, phoneNumber} = this.props;
    const themes = status ? themeLight : themeDark;
    return (
      <View style={styles.ViewSetting}>
        <Text
          style={{fontSize: 18, padding: 10, color: themes.theme.textColor}}>
          Tùy chỉnh
        </Text>
        <View style={{borderWidth: 0.5, borderColor: themes.theme.border}} />
        <TouchableOpacity
          style={[styles.DarkMode, {backgroundColor: themes.theme.background}]}
          onPress={this.checkStatus}>
          <View
            style={[
              styles.StyleIcon,
              {backgroundColor: themes.theme.backgroundBT},
            ]}>
            <IconIcons
              name={status ? 'partly-sunny' : 'moon'}
              size={20}
              color="#FDFDFD"
            />
          </View>
          <Text style={{fontSize: 15, color: themes.theme.textColor}}>
            {status ? 'Chế sáng' : 'Chế độ tối'}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: themes.theme.textColor,
              fontWeight: 'bold',
            }}>
            Bật
          </Text>
        </TouchableOpacity>
        <View style={{borderWidth: 0.5, borderColor: themes.theme.border}} />
        <Text
          onPress={() => {
            Linking.openURL(`tel:${phoneNumber}`);
          }}>
          {phoneNumber}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewSetting: {
    marginTop: 10,
  },
  DarkMode: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  StyleIcon: {
    backgroundColor: 'red',
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    status: state.StatusOff,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    checkStatus: () => {
      dispatch(actions.ON_CHECK_DONE());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewSetting);
