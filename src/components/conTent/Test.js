import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Modal, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import IconFontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';

class ModalsButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'BAN_BE',
    };
  }

  setModalVisibleButton = () => {
    const {setModalVisible} = this.props;
    setModalVisible();
  };

  onFriend = event => {
    this.setState({
      visible: event,
    });
  };

  render() {
    const {visible} = this.state;
    const {modalVisible} = this.props;
    const {theme} = this.context;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={this.setModalVisibleButton}>
          <TouchableOpacity
            style={styles.centeredView}
            onPressOut={this.setModalVisibleButton}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[
                  styles.modalText,
                  visible === 'BAN_BE' && styles.modalTextActive,
                ]}
                onPressOut={() => this.onFriend('BAN_BE')}>
                <IconFontAwesome5
                  name="user-friends"
                  size={20}
                  color={theme.titleColor}
                />
                <Text
                  style={[
                    styles.modalTextContent,
                    {color: theme.titleColor, fontWeight: 'bold'},
                  ]}>
                  Bạn bè
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.modalText,
                  visible === 'CHI_MINH_TOI' && styles.modalTextActive,
                ]}
                onPressOut={() => this.onFriend('CHI_MINH_TOI')}>
                <IconFontAwesome5
                  name="user"
                  size={20}
                  color={theme.titleColor}
                />
                <Text
                  style={[
                    styles.modalTextContent,
                    {color: theme.titleColor, fontWeight: 'bold'},
                  ]}>
                  Chỉ mình tôi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.modalText,
                  visible === 'BAN_CUA_BAN_BE' && styles.modalTextActive,
                ]}
                onPressOut={() => this.onFriend('BAN_CUA_BAN_BE')}>
                <IconFontAwesome
                  name="address-book"
                  size={20}
                  color={theme.titleColor}
                />
                <Text
                  style={[
                    styles.modalTextContent,
                    {color: theme.titleColor, fontWeight: 'bold'},
                  ]}>
                  Bạn của bạn bè
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.modalText,
                  visible === 'TUY_CHINH' && styles.modalTextActive,
                ]}
                onPressOut={() => this.onFriend('TUY_CHINH')}>
                <Ionicons
                  name="ios-settings"
                  color={theme.titleColor}
                  size={20}
                />
                <Text
                  style={[
                    styles.modalTextContent,
                    {color: theme.titleColor, fontWeight: 'bold'},
                  ]}>
                  Tùy chỉnh
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 20,
  },
  modalView: {
    width: '100%',
    margin: 'auto',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  modalText: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  modalTextActive: {
    backgroundColor: '#a8a7a7',
  },
  modalTextContent: {
    paddingLeft: 20,
  },
});
ModalsButtons.contextTypes = {
  theme: PropTypes.object,
};

ModalsButtons.propTypes = {
  setModalVisible: PropTypes.func,
  modalVisible: PropTypes.bool,
};

export default ModalsButtons;
