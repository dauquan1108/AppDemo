import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  setModalVisible = () => {
    const {setModalVisible} = this.props;
    setModalVisible();
  };

  visible = event => {
    const {visible} = this.state;
    const {onSelection} = this.props;
    onSelection(event);
    this.setState({
      visible: !visible,
    });
  };
  render() {
    const {visible} = this.state;
    const {modalVisible, setModalVisible} = this.props;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={this.setModalVisible}>
          <TouchableOpacity
            style={styles.centeredView}
            onPressOut={this.setModalVisible}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => this.visible('Bạn bè')}
                style={[styles.modalText, visible && styles.modalTextActive]}>
                <Text>Bạn bè</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.visible('Chỉ mình tôi')}
                style={[styles.modalText, !visible && styles.modalTextActive]}>
                <Text>Chỉ mình tôi</Text>
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
  },
  modalTextActive: {
    backgroundColor: 'red',
  },
});

export default Modals;
