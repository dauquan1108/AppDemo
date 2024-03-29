import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import * as actions from '../../actions';
import TestHooK from './TestHooK';

// Redux
import {connect} from 'react-redux';

// Component
import Header from '../group/Header';
import HeaderGroup from '../group/HeaderGroup';
import Test from './tesst';
import Buttons from './button';

// Theme
import ThemeLight from '../themes/light';
import ThemeDark from '../themes/dark';
import Modals from './Modal';
import StatusOff from '../../reducers/StatusOff';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      modalVisible: false,
      value: '',
      button: '' || 'button1',
      name: '' || 'quan1',
      selection: '' || 'Bạn bè',
    };
  }

  Status = () => {
    const {status} = this.state;
    this.setState({
      status: !status,
    });
  };
  onButton = (title, name) => {
    this.setState({
      button: title,
      name: name,
    });
  };
  // Modal
  setModalVisible = () => {
    const {modalVisible} = this.state;
    this.setState({modalVisible: !modalVisible});
  };
  onChangeInput = e => {
    this.setState({
      value: e,
    });
  };
  onClick = () => {
    const {value} = this.state;
    const values = value.trim();
    const {addData} = this.props;
    addData(values);
    this.setState({value: ''});
  };

  onSelection = event => {
    this.setState({
      selection: event,
    });
  };

  render() {
    const {navigation, data} = this.props;
    const {status, modalVisible, value, button, name, selection} = this.state;
    const ThemeColor = status ? ThemeLight.color : ThemeDark.color;
    const test = ThemeDark.color;
    return (
      <View>
        <ScrollView>
          <HeaderGroup navigation={navigation} title="Thông tin xét duyệt" />
          <Header />
          <View>
            {data.map(item => {
              return <Test key={item.id} item={item.names}  />;
            })}
          </View>
          <View style={{backgroundColor: 'red', width: 50, height: 30}}>
            <TouchableOpacity onPress={this.Status}>
              <Text>Button</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: ThemeColor}}> QuanDX </Text>
          </View>
          <TouchableOpacity onPress={this.setModalVisible}>
            <Text>Quan Modals {selection}</Text>
          </TouchableOpacity>
          <Modals
            onSelection={this.onSelection}
            modalVisible={modalVisible}
            setModalVisible={this.setModalVisible}
          />
          <TextInput
            type="text"
            style={styles.Input}
            placeholder="Vui lòng nhập..."
            autoFocus
            value={this.state.value}
            onChangeText={this.onChangeInput}
            onSubmitEditing={this.onClick}
          />
          <View>
            <Text>
              {button},{name}
            </Text>
            <Buttons onButton={this.onButton} />
          </View>
          <TestHooK />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.DataApp,
    statusOn: state.StatusOff,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    checkDone: () => {
      dispatch(actions.ON_CHECK_DONE());
    },
    addData: value => {
      dispatch(actions.ON_ADD_DATA(value));
    },
  };
};

const styles = StyleSheet.create({
  BorderButton: {
    borderWidth: 0.2,
    borderColor: '#72707475',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
