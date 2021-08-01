import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Text,
} from 'react-native';

// redux
import {connect} from 'react-redux';

// icon
import IonFontAwesome from 'react-native-vector-icons/FontAwesome';

//theme
import themeDark from '../themes/dark';
import themeLight from '../themes/light';

class HeaderShared extends Component {
  render() {
    const {navigation, status, title} = this.props;
    const themes = status ? themeLight : themeDark;
    return (
      <View
        style={[
          styles.HeaderShared,
          {backgroundColor: themes.theme.colorHeader},
        ]}>
        <StatusBar
          backgroundColor={themes.theme.colorHeader}
          barStyle={status ? 'dark-content' : 'light-content'}
          hidden={false}
          translucent={true}
        />
        <View style={styles.HeaderContent}>
          <TouchableOpacity
            style={styles.HeaderContentIcon}
            onPress={() => navigation.goBack()}>
            <IonFontAwesome
              name="chevron-left"
              size={20}
              color={themes.theme.buttonColor}
              onPress={this.goBack}
            />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: themes.theme.textColor,
              }}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeaderShared: {
    minHeight: 60,
    marginBottom: 5,
  },
  HeaderContent: {
    flexDirection: 'row',
    marginTop: '6%',
    alignItems: 'center',
  },
  HeaderContentIcon: {
    width: 30,
    alignItems: 'center',
  },
});
const mapStateToProps = state => {
  return {
    status: state.StatusOff,
  };
};
export default connect(mapStateToProps, null)(HeaderShared);
