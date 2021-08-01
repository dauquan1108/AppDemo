import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IonFontAwesome from 'react-native-vector-icons/FontAwesome';

class HeaderGroup extends Component {
  render() {
    const {navigation, title} = this.props;
    return (
      <View style={styles.HeaderGroup}>
        <View style={styles.StatusBar}>
          <StatusBar
            backgroundColor="#ffffff"
            barStyle="dark-content"
            hidden={false}
            translucent={true}
          />
        </View>
        <View style={styles.Header}>
          <View style={styles.HeaderTitle}>
            <TouchableOpacity
              style={styles.HeaderTitleIcon}
              onPress={() => navigation.goBack()}>
              <IonFontAwesome
                name="chevron-left"
                size={15}
                color="#ccc"
                onPress={this.goBack}
              />
            </TouchableOpacity>
            <View style={styles.HeaderTitleText}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderGroup;

const styles = StyleSheet.create({
  HeaderGroup: {},
  StatusBar: {
    flex: 1,
  },

  // Header
  Header: {
    marginTop: 24,
    height: 60,
  },
  HeaderTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  HeaderTitleIcon: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderTitleText: {
    flex: 12,
    alignItems: 'center',
  },
  // end Header
});
