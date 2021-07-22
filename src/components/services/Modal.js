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

  visible = () => {
    const {visible} = this.state;
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
                onPress={this.visible}
                style={[styles.modalText, visible && styles.modalTextActive]}>
                <View>
                  <Text>Bạn bè</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.visible}
                style={[styles.modalText, !visible && styles.modalTextActive]}>
                <View>
                  <Text>Chỉ mình tôi</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/*</View>*/}
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
