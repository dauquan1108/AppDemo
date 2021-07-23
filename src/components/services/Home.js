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

import {ON_ADD_DATA} from '../../actions';

// Redux
import {connect} from 'react-redux';

// Component
import Header from '../group/Header';
import HeaderGroup from '../group/HeaderGroup';
import Test from './tesst';
import Buttons from './button';

// Theme
import ThemeLight from '../themes/ThemeLight';
import ThemeDark from '../themes/ThemeDark';
import Modals from './Modal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      modalVisible: false,
      value: '',
      button: '' || 'button1',
      name: '' || 'quan1',
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
    const {addData} = this.props;
    addData(value);
    this.setState({value: ''});
  };

  render() {
    const {navigation, data} = this.props;
    const {status, modalVisible, value, button, name} = this.state;
    const ThemeColor = status ? ThemeLight.color : ThemeDark.color;
    const test = ThemeDark.color;
    return (
      <View>
        <ScrollView>
          <HeaderGroup navigation={navigation} title="Thông tin xét duyệt" />
          <Header />
          <View>
            {data.map(item => {
              return <Test key={item.id} item={item.names} />;
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
            <Text>Quan Modals</Text>
          </TouchableOpacity>
          <Modals
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
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.DataApp,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addData: value => {
      dispatch(ON_ADD_DATA(value));
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
