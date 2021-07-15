import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
} from 'react-native';

import IonFontAwesome from 'react-native-vector-icons/FontAwesome';

class SearchBlog extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.SearchBlog}>
        <View style={styles.StatusBar}>
          <StatusBar
            backgroundColor="#b3e6ff"
            barStyle="dark-content"
            hidden={false}
            translucent={true}
          />
        </View>
        <View style={styles.Header}>
          <View style={styles.HeaderInput}>
            <TouchableOpacity
              style={styles.HeaderInputIcon}
              onPress={() => navigation.goBack()}>
              <IonFontAwesome
                name="chevron-left"
                size={15}
                color="#ccc"
                onPress={this.goBack}
              />
            </TouchableOpacity>
            <View style={styles.HeaderInputTextInput}>
              <TextInput
                style={styles.HeaderInputTextInputText}
                placeholder="Tìm kiếm"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SearchBlog;
const styles = StyleSheet.create({
  SearchBlog: {},
  StatusBar: {
    flex: 1,
  },
  // Header
  Header: {
    marginTop: 24,
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: '#72707475',
  },

  HeaderInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  HeaderInputIcon: {
    flex: 2,
    alignItems: 'center',
  },
  HeaderInputTextInput: {
    flex: 11,
  },
  HeaderInputTextInputText: {
    backgroundColor: '#ccc',
    height: 40,
    width: 300,
    fontSize: 15,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 15,
  },
  // end Header
});
